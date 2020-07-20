import ActionType from 'store/action-types.js';

export default {
  changeFilterByGenre: (payload) => ({type: ActionType.CHANGE_FILTER_BY_GENRE, payload}),
  getMovieListByGenre: (payload) => ({type: ActionType.GET_MOVIE_LIST_BY_GENRE, payload}),
  getMovies: (payload) => ({type: ActionType.GET_MOVIES, payload}),
};
