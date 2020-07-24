import {combineReducers} from 'redux';

import app from './app/reducer.js';
import user from './user/reducer.js';

export default combineReducers({
  app,
  user,
});
