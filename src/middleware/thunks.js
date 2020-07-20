import ActionType from 'store/action-types.js';
import ActionCreator from 'store/action-creator.js';
import {createAPI} from '../api.js';

const api = createAPI();

export const getMovie = () => async (dispatch) => {
  // console.log(`asd`);
  try {
    const data = await api.get(`/films`);
    // console.log(data)
    dispatch(ActionCreator.getMovie(data));
  } catch (e) {
    console.log(e);
  }
};
// ({ payload }) may be there
// function* getMoviesAsync() {
//   try {
//     yield put(ActionCreator.requestMovies());
//     const data = yield call(() =>
//       axios
//         .get(`https://4.react.pages.academy/wtw/films`)
//         .then((res) => res.data));
//     yield put(ActionCreator.requestMoviesSuccess(data));
//   } catch (error) {
//     yield put(ActionCreator.requestMoviesError());
//   }
// }

// export function* getMovies() {
//   yield takeEvery(ActionType.GET_MOVIES, getMoviesAsync);
// }


// loadMovies: () => (dispatch, getState, api) => {
//   return api
//     .get(`/films`)
//     .then((response) => {
//       dispatch(ActionCreator.loadMovies(response.data));
//     })
//     .catch((err) => {
//       dispatch(AppActionCreator.setErrorText(err.toString()));
//       dispatch(AppActionCreator.showModal());
//     });
// },
