import {put, takeEvery, call, take} from 'redux-saga/effects';
import ActionType from 'store/action-types.js';
import ActionCreator from 'store/action-creator.js';
import axios from 'axios';

// ({ payload }) may be there
function* getMoviesAsync() {
  try {
    yield put(ActionCreator.requestMovies());
    const data = yield call(() =>
      axios
        .get(`https://4.react.pages.academy/wtw/films`)
        .then((res) => res.data));
    yield put(ActionCreator.requestMoviesSuccess(data));
  } catch (error) {
    yield put(ActionCreator.requestMoviesError());
  }
}

export function* getMovies() {
  yield takeEvery(ActionType.GET_MOVIES, getMoviesAsync);
}
