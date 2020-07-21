import ActionCreator from 'store/action-creator.js';
import axios from 'axios';

const createAPI = () => axios.create({
  baseURL: `https://4.react.pages.academy/wtw`,
  timeout: 1000 * 5,
  withCredentials: true,
});

const api = createAPI();

export const getMoviesAsync = () => async (dispatch) => {
  try {
    const response = await api.get(`/films`);
    dispatch(ActionCreator.getMovies(response.data));
  } catch (e) {
    // console.log(e);
  }
};
