import ActionCreator from 'store/action-creator.js';
import {createAPI} from '../api.js';

const api = createAPI();

export const getMovie = () => async (dispatch) => {
  try {
    const data = await api.get(`/films`);
    dispatch(ActionCreator.getMovie(data));
  } catch (e) {
    console.log(e);
  }
};