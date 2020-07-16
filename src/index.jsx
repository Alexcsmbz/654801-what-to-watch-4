import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'store/reducer.js';
import App from 'components/app/app.jsx';
import withActiveMovie from 'hocs/with-active-movie.jsx';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const data = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(sagaMiddleware))
);

const AppWrapped = withActiveMovie(App);

sagaMiddleware.run(sagas);

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
