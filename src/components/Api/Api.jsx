import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';
axios.defaults.baseURL = URL;

export const GetMovies = async () => {
  try {
    const server = await axios.get(
      `3/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const SearchMovie = async onSubmit => {
  try {
    const server = await axios.get(
      `3/search/movie?query=${onSubmit}&api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieInfo = async onSubmitId => {
  try {
    const server = await axios.get(
      `3/movie/${onSubmitId}?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieCast = async onSubmitCast => {
  try {
    const server = await axios.get(
      `3/movie/${onSubmitCast}/credits?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieReviews = async onSubmitReviews => {
  try {
    const server = await axios.get(
      `3/movie/${onSubmitReviews}/reviews?api_key=${API_KEY}&language=en-US`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.string,
};

MovieInfo.propTypes = {
  onSubmitId: PropTypes.string,
};

MovieCast.propTypes = {
  onSubmitCast: PropTypes.string,
};

MovieReviews.propTypes = {
  onSubmitReviews: PropTypes.string,
};
