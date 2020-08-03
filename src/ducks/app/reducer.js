import ActionType from './action-types.js';
import {extend} from 'utils/utils.js';
import {adapterKeys} from 'utils/utils.js';

const initialState = {
  selectedGenre: `All genres`,
  genres: [],
  movies: [],
  filteredMovies: [],
  isLoading: false,
  errors: [],
  addedMovies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        selectedGenre: action.payload
      });

    case ActionType.GET_MOVIE_LIST_BY_GENRE:
      const showMovies = action.payload === `All genres`
        ? state.movies
        : state.movies.filter((m) => m.genre === action.payload);

      return extend(state, {
        filteredMovies: showMovies
      });

    case ActionType.START_LOADING:
      return extend(state, {
        isLoading: true,
      });

    case ActionType.STOP_LOADING:
      return extend(state, {
        isLoading: false,
      });

    case ActionType.GET_MOVIES_SUCCESS:
      return extend(state, {
        movies: adapterKeys(action.payload),
        filteredMovies: adapterKeys(action.payload),
        genres: [`All genres`, ...new Set(action.payload.map((movie) => movie.genre))],
      });

    case ActionType.GET_MOVIES_FAILED:
      return extend(state, {
        errors: [action.payload, ...state.errors],
      });

    case ActionType.TOGGLE_MOVIE_IN_LIST:
      const adapteResponse = adapterKeys(action.payload);
      const addedMovies = !adapteResponse.isFavorite
        ? state.addedMovies.filter(({id}) => id !== adapteResponse.id)
        : [adapteResponse, ...state.addedMovies];

      return extend(state, {
        addedMovies,
      });

    case ActionType.GET_FAVORITE_MOVIES:
      return extend(state, {
        addedMovies: adapterKeys(action.payload),
      });

  }

  return state;
};
