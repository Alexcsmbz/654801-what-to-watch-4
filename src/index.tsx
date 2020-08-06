import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'ducks/ducks.js';
import App from 'components/app/app.tsx';
import withActiveMovie from 'hocs/with-active-movie.tsx';
import thunk from 'redux-thunk';
import {withRouter, BrowserRouter as Router} from 'react-router-dom';
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
}

declare const window: ExtendedWindow;

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const AppWrapped = withRouter(withActiveMovie(App));

ReactDOM.render(
    <Router>
      <Provider store={store}>
        <AppWrapped />
      </Provider>
    </Router>,
    document.querySelector(`#root`)
);
