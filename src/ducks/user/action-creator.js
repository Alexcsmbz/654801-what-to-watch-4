import ActionType from './action-types.js';

export default {
  getAuthStatus: (payload) => ({type: ActionType.GET_AUTH_STATUS, payload}),
  authSuccess: (payload) => ({type: ActionType.AUTH_SUCCESS, payload}),
  authFailed: (payload) => ({type: ActionType.AUTH_FAILED, payload}),
};
