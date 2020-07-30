import {useEffect} from 'react';
import Main from 'components/main/main.jsx';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import MoviePage from 'components/movie-page/movie-page.jsx';
import {connect} from 'react-redux';
import ActionCreator from 'ducks/app/action-creator.js';
import withActiveItem from 'hocs/with-active-item.jsx';
import withMaxAmount from 'hocs/with-max-amount.jsx';
import withFullscreen from 'hocs/with-fullscreen.jsx';
import {getMoviesAsync, getAuthStatusAsync, authAsync} from 'middleware/thunks.js';
import Loader from 'components/loader/loader.jsx';
import Popup from 'components/popup/popup.jsx';
import SignIn from 'components/sign-in/sign-in.jsx';

const MoviePageWrapped = withFullscreen(withActiveItem(MoviePage));
const MainWrapped = withFullscreen(withMaxAmount(withActiveItem(Main)));
const SignInWrapped = withRouter(SignIn);

const App = (props) => {
  const {
    name,
    genre,
    releaseDate,
    movies,
    onFilterClick,
    genres,
    activeMovie,
    setActiveMovie,
    getMovies,
    getAuthStatus,
    auth,
    isLoading,
    appErrors,
    userErrors,
    filteredMovies,
    isAuth,
    user,
  } = props;

  const onMovieCardClick = (movie) => {
    window.scrollTo(0, 0);
    setActiveMovie(movie);
  };

  useEffect(() => {
    getMovies();
    getAuthStatus();
  }, []);

  return <>
    <Loader isLoading={isLoading} />
    {
      appErrors.length !== 0 &&
      <Popup message={appErrors[0]} /> ||
      <Router>
        <Switch>
          <Route exact path="/">
            <MainWrapped
              movieName={name}
              genre={genre}
              releaseDate={releaseDate}
              movies={filteredMovies}
              genres={genres}
              onMovieCardClick={onMovieCardClick}
              onFilterClick={onFilterClick}
              isLoading={isLoading}
              isAuth={isAuth}
              user={user}
            />
          </Route>
          <Route exact path="/movie-page/:id">
            <MoviePageWrapped
              movie={activeMovie}
              onMovieCardClick={onMovieCardClick}
              isAuth={isAuth}
              user={user}
            />
          </Route>
          <Route exact path="/sign-in">
            <SignInWrapped
              message={userErrors[0]}
              isAuth={isAuth}
              onSignIn={auth}
            />
          </Route>
        </Switch>
      </Router>
    }
  </>;
};

App.propTypes = {
  filteredMovies: propTypes.arrayOf(propTypes.object),
  name: propTypes.string,
  genre: propTypes.string,
  releaseDate: propTypes.string,
  isAuth: propTypes.bool,
  movies: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    genre: propTypes.string,
    releaseDate: propTypes.string,
    promo: propTypes.string,
    poster: propTypes.string,
    previewMp4: propTypes.string,
    previewWebm: propTypes.string,
  })),
  genres: propTypes.arrayOf(propTypes.string),
  onFilterClick: propTypes.func,
  activeMovie: propTypes.shape({
    name: propTypes.string,
    genre: propTypes.string,
    releaseDate: propTypes.string,
    promo: propTypes.string,
    poster: propTypes.string,
    previewMp4: propTypes.string,
    previewWebm: propTypes.string,
  }),
  setActiveMovie: propTypes.func,
  getMovies: propTypes.func,
  getAuthStatus: propTypes.func,
  auth: propTypes.func,
  isLoading: propTypes.bool,
  appErrors: propTypes.arrayOf(propTypes.string),
  userErrors: propTypes.arrayOf(propTypes.string),
  user: propTypes.object,
};

const mapStateToProps = ({app, user}) => ({
  isAuth: user.isAuth,
  user: user.user,
  movies: app.movies,
  filteredMovies: app.filteredMovies,
  genres: app.genres,
  isLoading: app.isLoading,
  appErrors: app.errors,
  userErrors: user.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (genre) => {
    dispatch(ActionCreator.changeFilterByGenre(genre));
    dispatch(ActionCreator.getMovieListByGenre(genre));
  },
  getMovies: () => {
    dispatch(getMoviesAsync());
  },
  getAuthStatus: () => {
    dispatch(getAuthStatusAsync());
  },
  auth: (email, password) => {
    dispatch(authAsync(email, password));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
