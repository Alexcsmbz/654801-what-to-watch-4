import ActionType from './action-types.js';
import reducer from './reducer.js';
import {createAPI} from 'middleware/thunks.js';
import {adapterKeys} from 'utils/utils.js';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import {testUser} from 'config';

const api = createAPI(() => {});
const mockStore = configureStore([]);

describe(`User reducer test`, () => {
  it(`Reducer should set default state`, () => {
    expect(reducer(void 0, {})).toEqual({
      isAuth: false,
      user: {},
      errors: [],
    });
  });

  it(`Reducer should set auth status`, () => {
    expect(reducer({isAuth: false},
        {
          type: ActionType.GET_AUTH_STATUS,
          payload: testUser,
        }
    )).toEqual({
      isAuth: true,
      user: testUser,
      errors: [],
    });
  });

  it(`Reducer should set user`, () => {
    expect(reducer({
      isAuth: false,
      user: {},
      errors: [],
    },
    {
      type: ActionType.AUTH_SUCCESS,
      payload: testUser,
    }
    )).toEqual({
      isAuth: true,
      user: testUser,
      errors: [],
    });
  });

  it(`Reducer should set errors if auth failed`, () => {
    expect(reducer({
      isAuth: false,
      user: {},
      errors: [],
    },
    {
      type: ActionType.AUTH_FAILED,
      payload: `network error`,
    }
    )).toEqual({
      errors: [`network error`],
      isAuth: false,
      user: {},
    });
  });
});
