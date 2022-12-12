export const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;

export const IMAGE_LINK = "https://image.tmdb.org/t/p/w500";
export const IMAGE_UNAVAILABLE_PLACEHOLDER="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"

export const TRENDINGS = (pageNumber = 1) =>
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${pageNumber}`;

export const LATEST = (pageNumber = 1) =>
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNumber}`;

export const MOVIE_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

export const TV_GENRES = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`;

export const TV_SHOWS=(pageNumber=1) => `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${pageNumber}`;

export const FILTERED_MOVIES_WITH_GENRES=(pageNumber=1,id)=>`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${id}&with_watch_monetization_types=flatrate`

export const FILTERED_TV_SHOWS_WITH_GENRES=(pageNumber=1,id)=>`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNumber}&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`


export const SEARCH_MOVIES=(pageNumber=1,query="")=>`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`