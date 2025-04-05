import axios from "axios";

const API = {
  token:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmI2YjE0NzgwZmJmMTBkZDUwYjJkOGViYTkxMDllMSIsIm5iZiI6MTc0MzY3NTk0MC4wNzAwMDAyLCJzdWIiOiI2N2VlNjIyNDU0ZjU5NWJiNTVhN2E3YjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MaUqEKEhthYYkLklJ0fKokNh6yelotOGf9Wr0qQAFQ8",
  key: "82b6b14780fbf10dd50b2d8eba9109e1",
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API.token}`;
axios.defaults.params = {
  language: "ua-UA",
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", {
    params: { page: 1 },
  });
  return data.results;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: { page: 1, query },
  });
  return data.results;
};

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const fetchCastMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
};

export const fetchReviewsMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
};

export const makeSrcForPoster = (posterPath) =>
  posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://png.pngtree.com/png-clipart/20230823/original/pngtree-default-placeholder-businessman-half-length-portr-picture-image_8195617.png";
