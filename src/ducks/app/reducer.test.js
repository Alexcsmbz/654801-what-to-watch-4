import ActionType from './action-types.js';
import reducer from './reducer.js';
import {createAPI} from 'middleware/thunks.js';
import {adapterKeys} from 'utils/utils.js';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';

const api = createAPI(() => {});
const mockStore = configureStore([]);

describe(`Reducer test`, () => {
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
});
