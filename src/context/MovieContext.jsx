import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  FILTERED_MOVIES_WITH_GENRES,
  FILTERED_TV_SHOWS_WITH_GENRES,
  LATEST,
  MOVIE_GENRES,
  SEARCH_MOVIES,
  TRENDINGS,
  TV_GENRES,
  TV_SHOWS,
} from "../constants";
import { fetchData } from "../helpers/request";

export const MovieContext = createContext({});

export const MovieContextProvider = ({ children }) => {
  const [trendings, setTrendings] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTVGenres] = useState([]);
  const [trendingTotalPages, setTrendingTotalPages] = useState();
  const [latestTotalPages, setLatestTotalPages] = useState();
  const [tvTotalPages, setTvTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResultsTotalPages, setSearchResultsTotalPages] = useState();

  const fetchTrendings = async () => {
    const { data: movies } = await fetchData(TRENDINGS(currentPage));
    setTrendings(movies.results);
    setTrendingTotalPages(movies.total_pages);
  };

  const fetchLatest = async () => {
    const { data: movies } = await fetchData(LATEST(currentPage));
    setMovies(movies.results);
    setLatestTotalPages(movies.total_pages);
  };
  const fetchGenres = async () => {
    const { data } = await fetchData(MOVIE_GENRES);
    setMovieGenres(data.genres);
  };
  const fetchTvGenres = async () => {
    const { data } = await fetchData(TV_GENRES);
    setTVGenres(data.genres);
  };

  const fetchTvShows = async () => {
    const { data } = await fetchData(TV_SHOWS(currentPage));
    setTvShows(data.results);
    setTvTotalPages(data.total_pages);
  };

  const SearchMovies = async () => {
    if (!query) return;
    const { data } = await fetchData(SEARCH_MOVIES(currentPage, query));
    setMovieSearchResults(data.results);
    setSearchResultsTotalPages(data.total_pages);
  };

  useEffect(() => {
    fetchTrendings();
    fetchLatest();
    fetchGenres();
    fetchTvShows();
    fetchTvGenres();
    SearchMovies();
  }, [currentPage]);

  const handleGenres = async (id) => {
    setMovieGenres(
      movieGenres.map((genre) =>
        genre.id === id
          ? { ...genre, active: !genre.active }
          : { ...genre, active: false }
      )
    );

    const { data } = await axios.get(
      FILTERED_MOVIES_WITH_GENRES(currentPage, id)
    );
    setMovies(data.results);
  };
  const handleTvGenres = async (id) => {
    setTVGenres(
      tvGenres.map((genre) =>
        genre.id === id
          ? { ...genre, active: !genre.active }
          : { ...genre, active: false }
      )
    );

    const { data } = await axios.get(
      FILTERED_TV_SHOWS_WITH_GENRES(currentPage, id)
    );
    setTvShows(data.results);
  };



  return (
    <MovieContext.Provider
      value={{
        trendings,
        movies,
        movieGenres,
        tvShows,
        tvGenres,
        handleGenres,
        handleTvGenres,
        setMovies,
        trendingTotalPages,
        currentPage,
        setCurrentPage,
        setLatestTotalPages,
        latestTotalPages,
        tvTotalPages,
        searchResultsTotalPages,
        setQuery,
        SearchMovies,
        movieSearchResults,
        query,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
