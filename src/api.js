import axios from 'axios';

export const createAPI = (dispatch) => axios.create({
  baseURL: `https://4.react.pages.academy/wtw`,
  timeout: 1000 * 5,
  withCredentials: true,
});

const api = createAPI();

// export const onGetRequest = async (url, dispatch) => {
//   try {
//     const data = await api.get(url);
//     console.log(data)
//   } catch(e) {
//     console.log(e)
//   }
// };
