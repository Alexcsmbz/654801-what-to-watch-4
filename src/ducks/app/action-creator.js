import ActionType from './action-types.js';

export default {
  changeFilterByGenre: (payload) => ({type: ActionType.CHANGE_FILTER_BY_GENRE, payload}),
  getMovieListByGenre: (payload) => ({type: ActionType.GET_MOVIE_LIST_BY_GENRE, payload}),
  startLoading: () => ({type: ActionType.START_LOADING}),
  stopLoading: () => ({type: ActionType.STOP_LOADING}),
  getMoviesSuccess: (payload) => ({type: ActionType.GET_MOVIES_SUCCESS, payload}),
  getMoviesFailed: (payload) => ({type: ActionType.GET_MOVIES_FAILED, payload}),
  toggleMovieInList: (payload) => ({type: ActionType.TOGGLE_MOVIE_IN_LIST, payload}),
  getFavoriteMovies: (payload) => ({type: ActionType.GET_FAVORITE_MOVIES, payload}),
  getPromoMovie: (payload) => ({type: ActionType.GET_PROMO_MOVIE, payload}),
  getCommentList: (payload) => ({type: ActionType.GET_COMMENT_LIST, payload}),
};
