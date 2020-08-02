import ActionCreatorApp from 'ducks/app/action-creator.js';
import ActionCreatorUser from 'ducks/user/action-creator.js';
import axios from 'axios';
import {requestFlow} from 'utils/utils.js';

const createAPI = () => axios.create({
  baseURL: `https://4.react.pages.academy/wtw`,
  timeout: 1000 * 5,
  withCredentials: true,
});

const api = createAPI();

export const getMoviesAsync = () => (dispatch) => {
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorApp.getMoviesSuccess,
    failed: ActionCreatorApp.getMoviesFailed,
    stop: ActionCreatorApp.stopLoading,
  }, `/films`, api);
};

export const getAuthStatusAsync = () => (dispatch) => {
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorUser.getAuthStatus,
    failed: ActionCreatorApp.stopLoading,
    stop: ActionCreatorApp.stopLoading,
  }, `/login`, api);
};

export const authAsync = (email, password) => (dispatch) => {
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorUser.authSuccess,
    failed: ActionCreatorUser.authFailed,
    stop: ActionCreatorApp.stopLoading,
  }, `/login`, api, `post`, {email, password});
};

export const sendReviewAsync = ({rating, comment}) => (dispatch) => {
  // console.log(rating, comment);
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorApp.createReview,
    failed: ActionCreatorApp.stopLoading,
    stop: ActionCreatorApp.stopLoading,
  }, `/comments/42`, api, `post`, {rating, comment});
};
