import { createContext, useEffect, useMemo, useState } from "react";
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
import { useDebounce } from "../hooks/useDebounce";

export const MovieContext = createContext({});

export const MovieContextProvider = ({ children }) => {
  const [trendings, setTrendings] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTVGenres] = useState([]);
  const [trendingTotalPages, setTrendingTotalPages] = useState(0);
  const [latestTotalPages, setLatestTotalPages] = useState(0);
  const [tvTotalPages, setTvTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [searchResultsTotalPages, setSearchResultsTotalPages] = useState(0);

  const fetchTrendings = async () => {
    try {
      const { data } = await fetchData(TRENDINGS(currentPage));
      setTrendings(data.results);
      setTrendingTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching trendings:", error);
    }
  };

  const fetchLatest = async () => {
    try {
      const { data } = await fetchData(LATEST(currentPage));
      setMovies(data.results);
      setLatestTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching latest:", error);
    }
  };

  const fetchGenres = async () => {
    try {
      const { data } = await fetchData(MOVIE_GENRES);
      setMovieGenres(data.genres.map((g) => ({ ...g, active: false })));
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const fetchTvGenres = async () => {
    try {
      const { data } = await fetchData(TV_GENRES);
      setTVGenres(data.genres.map((g) => ({ ...g, active: false })));
    } catch (error) {
      console.error("Error fetching TV genres:", error);
    }
  };

  const fetchTvShows = async () => {
    try {
      const { data } = await fetchData(TV_SHOWS(currentPage));
      setTvShows(data.results);
      setTvTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  };

  const SearchMovies = async () => {
    try {
      if (!debouncedQuery) {
        setMovieSearchResults([]);
        setSearchResultsTotalPages(0);
        return;
      }
      const { data } = await fetchData(
        SEARCH_MOVIES(currentPage, debouncedQuery)
      );
      setMovieSearchResults(data.results);
      setSearchResultsTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  useEffect(() => {
    fetchTrendings();
    fetchLatest();
    fetchGenres();
    fetchTvShows();
    fetchTvGenres();
    SearchMovies();
  }, [currentPage, debouncedQuery]);

  const handleGenres = async (id) => {
    try {
      setMovieGenres(
        movieGenres.map((genre) =>
          genre.id === id ? { ...genre, active: !genre.active } : genre
        )
      );
      const { data } = await fetchData(
        FILTERED_MOVIES_WITH_GENRES(currentPage, id)
      );
      setMovies(data.results);
    } catch (error) {
      console.error("Error handling genres:", error);
    }
  };

  const handleTvGenres = async (id) => {
    try {
      setTVGenres(
        tvGenres.map((genre) =>
          genre.id === id ? { ...genre, active: !genre.active } : genre
        )
      );
      const { data } = await fetchData(
        FILTERED_TV_SHOWS_WITH_GENRES(currentPage, id)
      );
      setTvShows(data.results);
    } catch (error) {
      console.error("Error handling TV genres:", error);
    }
  };

  const values = useMemo(
    () => ({
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
    }),
    [
      trendings,
      movies,
      movieGenres,
      tvShows,
      tvGenres,
      trendingTotalPages,
      currentPage,
      latestTotalPages,
      tvTotalPages,
      searchResultsTotalPages,
      movieSearchResults,
      query,
    ]
  );

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
