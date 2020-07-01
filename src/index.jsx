import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Reducer} from './reducer.js';
import App from 'components/app/app.jsx';
import films from 'mock/films.js';

const data = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

const store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        name={data.name}
        genre={data.genre}
        releaseDate={data.releaseDate}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
