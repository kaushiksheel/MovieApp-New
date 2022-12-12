export const API_KEY = "2edf9f02e088272f6ff2eab6bf5fa21a";

export const IMAGE_LINK = "https://image.tmdb.org/t/p/original";

export const TRENDINGS = (pageNumber = 1) =>
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${pageNumber}`;

export const LATEST = (pageNumber = 1) =>
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNumber}`;

export const MOVIE_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

export const TV_GENRES = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`;

export const TV_SHOWS=(pageNumber) => `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${pageNumber}`;
