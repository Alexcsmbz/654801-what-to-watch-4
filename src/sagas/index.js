import {put, takeEvery, call, take} from 'redux-saga/effects';
import ActionType from 'store/action-types.js';
import ActionCreator from 'store/action-creator.js';
import axios from 'axios';

function* getMoviesAsync() {
  try {
    yield put(ActionCreator.requestMovies());
    // async/await
    // Зачем здесь нужен call?
    const data = yield axios.get(`https://4.react.pages.academy/wtw/films`).then((res) => res.data);
    yield put(ActionCreator.requestMoviesSuccess(data));
  } catch (error) {
    yield put(ActionCreator.requestMoviesError());
  }
}

export function* getMovies() {
  yield takeEvery(ActionType.GET_MOVIES, getMoviesAsync);
}
