import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  API_KEY,
  LATEST,
  MOVIE_GENRES,
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


  const fetchTrendings = async () => {
    const { data: movies } = await fetchData(TRENDINGS);
    setTrendings(movies.results);
  };

  const fetchLatest = async () => {
    const { data: movies } = await fetchData(LATEST);
    setMovies(movies.results);
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
    const { data } = await fetchData(TV_SHOWS);
    setTvShows(data.results);
  };

  useEffect(() => {
    fetchTrendings();
    fetchLatest();
    fetchGenres();
    fetchTvShows();
    fetchTvGenres();
  }, []);

  const handleGenres = async (id) => {
    setMovieGenres(
      movieGenres.map((genre) =>
        genre.id === id
          ? { ...genre, active: !genre.active }
          : { ...genre, active: false }
      )
    );

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
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
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
