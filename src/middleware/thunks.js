import ActionCreator from 'store/action-creator.js';
import {createAPI} from '../api.js';

const api = createAPI();

export const getMovies = () => async (dispatch) => {
  try {
    const response = await api.get(`/films`);
    dispatch(ActionCreator.getMovies(response.data));
  } catch (e) {
    console.log(e);
  }
};