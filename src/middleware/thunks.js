import ActionCreator from 'ducks/app/action-creator.js';
import axios from 'axios';

const createAPI = () => axios.create({
  baseURL: `https://4.react.pages.academy/wtw`,
  timeout: 1000 * 5,
  withCredentials: true,
});

const api = createAPI();

export const getMoviesAsync = () => async (dispatch) => {
  dispatch(ActionCreator.getMoviesRequest());
  try {
    const response = await api.get(`/films`);
    dispatch(ActionCreator.getMoviesSuccess(response.data));
  } catch (e) {
    dispatch(ActionCreator.getMoviesFailed(e.message));
  }
};
