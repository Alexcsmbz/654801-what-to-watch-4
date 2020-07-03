import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'store/reducer.js';
import App from 'components/app/app.jsx';

const data = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        name={data.name}
        genre={data.genre}
        releaseDate={data.releaseDate}
      />
    </Provider>,
    document.querySelector(`#root`)
);
