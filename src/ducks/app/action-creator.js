import ActionType from './action-types.js';

export default {
  changeFilterByGenre: (payload) => ({type: ActionType.CHANGE_FILTER_BY_GENRE, payload}),
  getMovieListByGenre: (payload) => ({type: ActionType.GET_MOVIE_LIST_BY_GENRE, payload}),
  startLoading: () => ({type: ActionType.START_LOADING}),
  stopLoading: () => ({type: ActionType.STOP_LOADING}),
  getMoviesSuccess: (payload) => ({type: ActionType.GET_MOVIES_SUCCESS, payload}),
  getMoviesFailed: (payload) => ({type: ActionType.GET_MOVIES_FAILED, payload}),
};
