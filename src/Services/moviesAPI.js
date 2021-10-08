import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '13e43dcb2f0a06afd394e08d551727c3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const fetchMovies = async () => {
  try {
    const response = await axios.get('/trending/movie/day');
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
