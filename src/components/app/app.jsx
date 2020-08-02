import {useEffect} from 'react';
import Main from 'components/main/main.jsx';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import MoviePage from 'components/movie-page/movie-page.jsx';
import {connect} from 'react-redux';
import ActionCreator from 'ducks/app/action-creator.js';
import withActiveItem from 'hocs/with-active-item.jsx';
import withMaxAmount from 'hocs/with-max-amount.jsx';
import withFullscreen from 'hocs/with-fullscreen.jsx';
import withReview from 'hocs/with-review.jsx';
import {getMoviesAsync, getAuthStatusAsync, authAsync, sendReviewAsync} from 'middleware/thunks.js';
import Loader from 'components/loader/loader.jsx';
import Popup from 'components/popup/popup.jsx';
import SignIn from 'components/sign-in/sign-in.jsx';
import AddReviewPage from 'components/add-review-page/add-review-page.jsx';

const AddReviewPageWrapped = withReview(AddReviewPage);
const MoviePageWrapped = withFullscreen(withActiveItem(MoviePage));
const MainWrapped = withFullscreen(withMaxAmount(withActiveItem(Main)));
// const SignInWrapped = SignIn;
// TODO: Create page catalog with pages

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
    sendReview,
    toggleMovieInList,
    addedMovies,
  } = props;

  const {push} = useHistory();

  const onMovieCardClick = (movie) => {
    window.scrollTo(0, 0);
    setActiveMovie(movie);
  };

  useEffect(() => {
    getMovies();
    getAuthStatus(() => push(`/login`));
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
              addedMovies={addedMovies}
              movie={activeMovie}
              onMovieCardClick={onMovieCardClick}
              isAuth={isAuth}
              user={user}
              toggleMovieInList={toggleMovieInList}
            />
          </Route>
          <Route exact path="/login">
            <SignIn
              message={userErrors[0]}
              isAuth={isAuth}
              onSignIn={auth}
            />
          </Route>
          <Route exact path="/movie-page/:id/add-review-page">
            <AddReviewPageWrapped
              movie={activeMovie}
              sendReview={sendReview}
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
  sendReview: propTypes.func,
  toggleMovieInList: propTypes.func,
  addedMovies: propTypes.array,
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
  addedMovies: app.addedMovies,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (genre) => {
    dispatch(ActionCreator.changeFilterByGenre(genre));
    dispatch(ActionCreator.getMovieListByGenre(genre));
  },
  getMovies: () => {
    dispatch(getMoviesAsync());
  },
  getAuthStatus: (go) => {
    dispatch(getAuthStatusAsync(go));
  },
  auth: (email, password) => {
    dispatch(authAsync(email, password));
  },
  sendReview: (review) => {
    dispatch(sendReviewAsync(review));
  },
  toggleMovieInList: (movie) => {
    dispatch(ActionCreator.toggleMovieInList(movie));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
