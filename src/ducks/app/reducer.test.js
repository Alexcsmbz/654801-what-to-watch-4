import ActionType from './action-types.js';
import reducer from './reducer.js';
import {createAPI} from 'middleware/thunks.js';
import {adapterKeys} from 'utils/utils.js';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import {testMovie, testMovies, testComments} from 'config';

const api = createAPI(() => {});
const mockStore = configureStore([]);

describe(`App reducer test`, () => {
  it(`Reducer should set default state`, () => {
    expect(reducer(void 0, {})).toEqual({
      selectedGenre: `All genres`,
      genres: [],
      movies: [],
      filteredMovies: [],
      isLoading: false,
      errors: [],
      addedMovies: [],
      promoMovie: {},
      commentList: [],
    });
  });

  it(`Reducer should change filter genre`, () => {
    expect(reducer({selectedGenre: `All genres`},
        {
          type: ActionType.CHANGE_FILTER_BY_GENRE,
          payload: `Crime`,
        }
    )).toEqual({selectedGenre: `Crime`});
  });

  it(`Reducer should set start loading`, () => {
    expect(reducer({isLoading: false},
        {type: ActionType.START_LOADING}
    )).toEqual({isLoading: true});
  });

  it(`Reducer should set stop loading`, () => {
    expect(reducer({isLoading: true},
        {type: ActionType.STOP_LOADING}
    )).toEqual({isLoading: false});
  });

  it(`Reducer should load promo movie`, () => {
    expect(reducer({promoMovie: {}},
        {
          type: ActionType.GET_PROMO_MOVIE,
          payload: testMovie,
        }
    )).toEqual({promoMovie: testMovie});
  });

  it(`Reducer should load movies`, () => {
    expect(reducer({movies: []},
        {
          type: ActionType.GET_MOVIES_SUCCESS,
          payload: testMovies,
        }
    )).toEqual({
      movies: testMovies,
      filteredMovies: testMovies,
      genres: [`All genres`, ...new Set(testMovies.map((movie) => movie.genre))],
    });
  });

  it(`Reducer should get movie list by genre`, () => {
    expect(reducer({movies: testMovies},
        {
          type: ActionType.GET_MOVIE_LIST_BY_GENRE,
          payload: `genre`,
        }
    )).toEqual({
      filteredMovies: testMovies,
      movies: testMovies,
    });
  });

  it(`Reducer should set error if load failed`, () => {
    expect(reducer({errors: []},
        {
          type: ActionType.GET_MOVIES_FAILED,
          payload: `network error`,
        }
    )).toEqual({errors: [`network error`]});
  });

  it(`Reducer should set favorite movie`, () => {
    expect(reducer({addedMovies: testMovies},
        {
          type: ActionType.TOGGLE_MOVIE_IN_LIST,
          payload: testMovie,
        }
    )).toEqual({addedMovies: []});
  });

  it(`Reducer should load favorite movies`, () => {
    expect(reducer({addedMovies: testMovies},
        {
          type: ActionType.GET_FAVORITE_MOVIES,
          payload: testMovie,
        }
    )).toEqual({addedMovies: testMovie});
  });

  it(`Reducer should load comment list`, () => {
    expect(reducer({commentList: []},
        {
          type: ActionType.GET_COMMENT_LIST,
          payload: testComments,
        }
    )).toEqual({commentList: testComments});
  });
});
