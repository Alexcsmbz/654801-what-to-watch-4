import ActionType from 'store/action-types.js';

export default {
  changeFilterByGenre: (payload) => ({type: ActionType.CHANGE_FILTER_BY_GENRE, payload}),
  getMovieListByGenre: (payload) => ({type: ActionType.GET_MOVIE_LIST_BY_GENRE, payload}),
  getRequest: () => ({type: ActionType.GET_REQUEST}),
  getMoviesSuccess: (payload) => ({type: ActionType.GET_MOVIES_SUCCESS, payload}),
  getMoviesFailed: (payload) => ({type: ActionType.GET_MOVIES_FAILED, payload}),
};
