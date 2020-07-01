import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';
import {App} from 'components/app/app.jsx';
import movies from 'mock/movies.js';

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
        movies={movies}
      />
    </Provider>,
    document.querySelector(`#root`)
);
