import ActionCreatorApp from 'ducks/app/action-creator.js';
import ActionCreatorUser from 'ducks/user/action-creator.js';
import axios from 'axios';
import {requestFlow} from 'utils/utils.js';
import {baseURL} from 'config';

export const createAPI = () => axios.create({
  baseURL: `${baseURL}/wtw`,
  timeout: 1000 * 5,
  withCredentials: true,
});

const api = createAPI();

export const getMoviesAsync = (go) => (dispatch) => {
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorApp.getMoviesSuccess,
    failed: ActionCreatorApp.getMoviesFailed,
    stop: ActionCreatorApp.stopLoading,
  }, `/films`, api, go);
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

export const sendReviewAsync = ({rating, comment, movieId}) => (dispatch) => {
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorApp.createReview,
    failed: ActionCreatorApp.stopLoading,
    stop: ActionCreatorApp.stopLoading,
  }, `/comments/${movieId}`, api, `post`, {rating, comment});
};

export const getFavoriteMoviesAsync = () => (dispatch) => {
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorApp.getFavoriteMovies,
    failed: ActionCreatorApp.stopLoading,
    stop: ActionCreatorApp.stopLoading,
  }, `/favorite`, api);
};

export const toggleFavoriteMovieAsync = (movie, movieStatus) => (dispatch) => {
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorApp.toggleMovieInList,
    failed: ActionCreatorApp.stopLoading,
    stop: ActionCreatorApp.stopLoading,
  }, `/favorite/${movie.id}/${movieStatus}`, api, `post`, {
    "film_id": movie.id,
    "status": movieStatus
  });
};

export const getPromoMovieAsync = () => (dispatch) => {
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorApp.getPromoMovie,
    failed: ActionCreatorApp.stopLoading,
    stop: ActionCreatorApp.stopLoading,
  }, `/films/promo`, api);
};

export const getCommentListAsync = ({id}) => (dispatch) => {
  requestFlow(dispatch, {
    start: ActionCreatorApp.startLoading,
    success: ActionCreatorApp.getCommentList,
    failed: ActionCreatorApp.stopLoading,
    stop: ActionCreatorApp.stopLoading,
  }, `/comments/${id}`, api);
};
