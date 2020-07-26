import ActionCreator from 'ducks/app/action-creator.js';
import axios from 'axios';

const createAPI = () => axios.create({
  baseURL: `https://4.react.pages.academy/wtw`,
  timeout: 1000 * 5,
  withCredentials: true,
});

const api = createAPI();

export const getMoviesAsync = () => async (dispatch) => {
  dispatch(ActionCreator.getRequest());
  try {
    const response = await api.get(`/films`);
    dispatch(ActionCreator.getMoviesSuccess(response.data));
  } catch (e) {
    dispatch(ActionCreator.getMoviesFailed(e.message));
  }
};

export const getAuthStatusAsync = () => async (dispatch) => {
  dispatch(ActionCreator.getRequest());
  try {
    const response = await api.get(`/login`);
  } catch (e) {
    console.log(e);
  }
};

export const authAsync = () => async (dispatch) => {
  dispatch(ActionCreator.getRequest());
  try {
    const response = await api.post(`/login`, {
      email: `email@email.ru`,
      password: `password`,
    });
  } catch (e) {
    console.log(e);
  }
};
