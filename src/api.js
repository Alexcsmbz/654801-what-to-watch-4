import axios from 'axios';

export const createAPI = (dispatch) => axios.create({
  baseURL: `https://4.react.pages.academy/wtw`,
  timeout: 1000 * 5,
  withCredentials: true,
});
