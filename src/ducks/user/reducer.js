import ActionType from './action-types.js';
import {extend} from 'utils/utils.js';
import {adapterKeys} from 'utils/utils.js';

const initialState = {
  isAuth: false,
  user: {},
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_AUTH_STATUS:
      return extend(state, {
        isAuth: true,
        user: action.payload,
      });

    case ActionType.AUTH_SUCCESS:
      return extend(state, {
        isAuth: true,
        user: action.payload,
      });

    case ActionType.AUTH_FAILED:
      return extend(state, {
        errors: [action.payload, ...state.errors],
      });
  }

  return state;
};
