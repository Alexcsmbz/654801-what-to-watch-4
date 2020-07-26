import ActionType from './action-types.js';

export default {
  getAuthStatus: (payload) => ({type: ActionType.GET_AUTH_STATUS, payload}),
};
