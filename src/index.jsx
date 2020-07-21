import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'store/reducer.js';
import App from 'components/app/app.jsx';
import withActiveMovie from 'hocs/with-active-movie.jsx';
import thunk from 'redux-thunk';
import {createAPI} from './api.js';
import {getMovies} from './middleware/thunks.js';

const data = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

const api = createAPI();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch(getMovies());

const AppWrapped = withActiveMovie(App);

ReactDOM.render(
    <Provider store={store}>
      <AppWrapped
        name={data.name}
        genre={data.genre}
        releaseDate={data.releaseDate}
      />
    </Provider>,
    document.querySelector(`#root`)
);
