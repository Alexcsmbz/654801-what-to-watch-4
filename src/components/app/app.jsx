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
    errors,
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
      errors.length !== 0 &&
      <Popup message={errors[0]} /> ||
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
            <SignInWrapped onSignIn={auth} />
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
  errors: propTypes.arrayOf(propTypes.string),
  user: propTypes.object,
};

const mapStateToProps = (s) => ({
  isAuth: s.user.isAuth,
  user: s.user.user,
  movies: s.app.movies,
  filteredMovies: s.app.filteredMovies,
  genres: s.app.genres,
  isLoading: s.app.isLoading,
  errors: s.app.errors,
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
