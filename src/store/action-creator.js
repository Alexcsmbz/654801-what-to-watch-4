import ActionType from 'store/action-types.js';

export default {
  changeFilterByGenre: (payload) => ({type: ActionType.CHANGE_FILTER_BY_GENRE, payload}),
  getMovieListByGenre: (payload) => ({type: ActionType.GET_MOVIE_LIST_BY_GENRE, payload}),
  getMovies: () => ({type: ActionType.GET_MOVIES}),
  requestMovies: () => ({type: ActionType.REQUEST_MOVIES}),
  requestMoviesSuccess: (payload) => ({type: ActionType.REQUEST_MOVIES_SUCCEEDED, payload}),
  requestMoviesError: () => ({type: ActionType.REQUEST_MOVIES_FAILED}),
};
