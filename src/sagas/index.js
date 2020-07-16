import {all, takeLatest} from 'redux-saga/effects';
import ActionType from 'store/action-types.js';
import ActionCreator from 'store/action-creator.js';

function* sagas() {
  yield all([
    takeLatest(ActionType.CHANGE_FILTER_BY_GENRE, ActionCreator.changeFilterByGenre),
    takeLatest(ActionType.GET_MOVIE_LIST_BY_GENRE, ActionCreator.getMovieListByGenre),
  ]);
}

export default sagas;
