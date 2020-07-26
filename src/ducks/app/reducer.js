import ActionType from './action-types.js';
import {extend} from 'utils/utils.js';
import {adapterMovies} from 'utils/utils.js';

const initialState = {
  selectedGenre: `All genres`,
  genres: [],
  movies: [],
  filteredMovies: [],
  isLoading: false,
  errors: [],
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

    case ActionType.GET_REQUEST:
      return extend(state, {
        isLoading: true,
      });

    case ActionType.GET_MOVIES_SUCCESS:
      return extend(state, {
        movies: action.payload,
        filteredMovies: action.payload,
        genres: [`All genres`, ...new Set(action.payload.map((movie) => movie.genre))],
        isLoading: false,
      });

    case ActionType.GET_MOVIES_FAILED:
      return extend(state, {
        errors: [action.payload, ...state.errors],
        isLoading: false,
      });
  }

  return state;
};
