import axios from 'axios';
import PropTypes from 'prop-types';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmFjMThkZTliMmI1NDkwNTZmYWVhNTZjOTAyNzU2YiIsInN1YiI6IjY0NmI1NGE5NTc1MzBlMDc4YTYwYjYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M0yl0J_692yCcYW8WNbOdrUjK2jg9bmYgULdE6qFbyg',
  },
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const GetMovies = async () => {
  const response = await axios.get(`trending/movie/day`, options);
  return response.data;
};

export const SearchMovie = async onSubmit => {
  const response = await axios.get(`search/movie?query=${onSubmit}`, options);
  return response.data;
};

export const MovieInfo = async onSubmitId => {
  const response = await axios.get(`movie/${onSubmitId}`, options);
  return response.data;
};

export const MovieCast = async onSubmitCast => {
  const response = await axios.get(
    `movie/${onSubmitCast}/credits?language=en-US`,
    options
  );
  return response.data;
};

export const MovieReviews = async onSubmitReviews => {
  const response = await axios.get(
    `movie/${onSubmitReviews}/reviews?language=en-US`,
    options
  );
  return response.data;
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