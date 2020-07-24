import movies from 'mock/movies.js';
import ActionType from 'store/action-types.js';
import {extend} from 'utils/utils.js';

const initialState = {
  genre: `All genres`,
  movies,
  genres: [`All genres`, ...new Set(movies.map((m) => m.genre))],
  backMovies: [],
  isLoading: false,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        genre: action.payload
      });

    case ActionType.GET_MOVIE_LIST_BY_GENRE:
      const showMovies = action.payload === `All genres`
        ? movies
        : movies.filter((m) => m.genre === action.payload);

      return extend(state, {
        movies: showMovies
      });

    case ActionType.GET_MOVIES_REQUEST:
      return extend(state, {
        isLoading: true,
      });

    case ActionType.GET_MOVIES_SUCCESS:
      return extend(state, {
        backMovies: action.payload,
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
