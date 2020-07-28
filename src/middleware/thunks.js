import ActionCreatorApp from 'ducks/app/action-creator.js';
import ActionCreatorUser from 'ducks/user/action-creator.js';
import axios from 'axios';

const createAPI = () => axios.create({
  baseURL: `https://4.react.pages.academy/wtw`,
  timeout: 1000 * 5,
  withCredentials: true,
});

const api = createAPI();

export const getMoviesAsync = () => async (dispatch) => {
  dispatch(ActionCreatorApp.startLoading());
  try {
    const response = await api.get(`/films`);
    dispatch(ActionCreatorApp.getMoviesSuccess(response.data));
  } catch (e) {
    dispatch(ActionCreatorApp.getMoviesFailed(e.message));
  } finally {
    dispatch(ActionCreatorApp.stopLoading());
  }
};

export const getAuthStatusAsync = () => async (dispatch) => {
  dispatch(ActionCreatorApp.startLoading());
  try {
    const response = await api.get(`/login`);
    dispatch(ActionCreatorUser.getAuthStatus(response.data));
  } catch (e) {
    dispatch(ActionCreatorUser.authFailed(e.message));
  } finally {
    dispatch(ActionCreatorApp.stopLoading());
  }
};

export const authAsync = (email, password) => async (dispatch) => {
  dispatch(ActionCreatorApp.startLoading());
  try {
    const response = await api.post(`/login`, {email, password});
    dispatch(ActionCreatorUser.authSuccess(response.data));
  } catch (e) {
    dispatch(ActionCreatorUser.authFailed(e.message));
  } finally {
    dispatch(ActionCreatorApp.stopLoading());
  }
};
