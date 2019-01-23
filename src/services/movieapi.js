import axios from 'axios';

function getMovies(input) {
  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${input}`;
  const resp = axios.get(BASE_URL);
  return resp;
}

function getTopRated() {
  const BASE_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US`;
  const resp = axios.get(BASE_URL);
  return resp;
}

function getNowPlaying() {
  const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}&language=en-US`;
  const resp = axios.get(BASE_URL);
  console.log(resp);
  return resp;
}

function getUpcoming() {
  const BASE_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_API_KEY}&language=en-US`;
  const resp = axios.get(BASE_URL);
  return resp;
}

function getCredits(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/' + id + `/credits?&api_key=${process.env.MOVIE_API_KEY}&language=en-US`;
  const resp = axios.get(BASE_URL);
  return resp;
}

export {
  getMovies,
  getTopRated,
  getNowPlaying,
  getUpcoming,
  getCredits
}
