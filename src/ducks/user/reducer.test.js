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
      isAuth: false,
      user: {},
      errors: [],
    });
  });
});
