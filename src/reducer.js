import movies from 'mock/movies.js';
import {extend} from 'utils/utils.js';

const initialState = {
  genre: `All genres`,
  movies,
};

const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  GET_MOVIE_LIST_BY_GENRE: `GET_MOVIE_LIST_BY_GENRE`,
};

const ActionCreator = {
  changeFilterByGenre: (action) => ({
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: action.payload,
  }),

  getMovieListByGenre: (action) => ({
    type: ActionType.GET_MOVIE_LIST_BY_GENRE,
    payload: action.payload,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        genre: action.payload
      });

    case ActionType.GET_MOVIE_LIST_BY_GENRE:
      return extend(state, {
        movies: state.movies.filter((m) => m === action.payload)
      });
  }

  return state;
};

export {
  reducer,
  ActionType,
  ActionCreator,
};
