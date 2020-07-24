import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'ducks';
import App from 'components/app/app.jsx';
import withActiveMovie from 'hocs/with-active-movie.jsx';
import thunk from 'redux-thunk';

const data = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

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
