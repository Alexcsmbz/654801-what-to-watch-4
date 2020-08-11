import {useEffect} from 'react';
import Main from 'components/main/main.tsx';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import MoviePage from 'components/movie-page/movie-page.tsx';
import {connect} from 'react-redux';
import ActionCreator from 'ducks/app/action-creator.js';
import withActiveItem from 'hocs/with-active-item.tsx';
import withMaxAmount from 'hocs/with-max-amount.tsx';
import withFullscreen from 'hocs/with-fullscreen.tsx';
import withReview from 'hocs/with-review.tsx';
import {
  getMoviesAsync,
  getAuthStatusAsync,
  authAsync,
  sendReviewAsync,
  toggleFavoriteMovieAsync,
  getFavoriteMoviesAsync,
  getPromoMovieAsync,
  getCommentListAsync,
} from 'middleware/thunks.js';
import Loader from 'components/loader/loader.tsx';
import Popup from 'components/popup/popup.tsx';
import SignIn from 'components/sign-in/sign-in.tsx';
import AddReviewPage from 'components/add-review-page/add-review-page.tsx';
import PrivateRoute from 'components/private-route/private-route.tsx';
import MyListPage from 'components/my-list-page/my-list-page.tsx';
import {RoutePath} from 'config';
import {IMovie, IUser, ICommentGet, ICommentPost} from 'types/app';

const AddReviewPageWrapped = withReview(AddReviewPage);
const MoviePageWrapped = withFullscreen(withActiveItem(MoviePage));
const MainWrapped = withFullscreen(withMaxAmount(withActiveItem(Main)));

interface IProps {
  promoMovie: IMovie,
  movies: Array<IMovie>,
  genres: Array<string>,
  activeMovie: IMovie,
  isLoading: boolean,
  appErrors: Array<string>,
  userErrors: Array<string>,
  filteredMovies: Array<IMovie>,
  isAuth: boolean,
  user: IUser,
  addedMovies: Array<IMovie>,
  commentList: Array<ICommentGet>,
  onFilterClick: (genre: string) => void,
  setActiveMovie: (movie: IMovie) => void,
  getMovies: () => void,
  getAuthStatus: (go: () => void) => void,
  auth: (email: string, password: string) => void,
  sendReview: (review: ICommentPost) => void,
  toggleMovieInList: (movieId: number, movieStatus: number) => void,
  getFavoriteMovies: () => void,
  getPromoMovie: () => void,
  getCommentList: (movie: IMovie) => void,
}

const App: React.FC<IProps> = (props: IProps) => {
  const {
    promoMovie,
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
    getFavoriteMovies,
    getPromoMovie,
    getCommentList,
    commentList,
  } = props;

  const {push} = useHistory();

  const onMovieCardClick = (movie) => {
    window.scrollTo(0, 0);
    setActiveMovie(movie);
  };

  useEffect(() => {
    getMovies();
    getFavoriteMovies();
    getAuthStatus(() => push(`/login`));
    getPromoMovie();
  }, []);

  return <>
    <Loader isLoading={isLoading} />
    {
      appErrors.length !== 0 &&
      <Popup message={appErrors[0]} /> ||
      <Router>
        <Switch>
          <Route exact path={RoutePath.MAIN}>
            <MainWrapped
              toggleMovieInList={toggleMovieInList}
              promoMovie={promoMovie}
              addedMovies={addedMovies}
              movies={filteredMovies}
              genres={genres}
              onMovieCardClick={onMovieCardClick}
              onFilterClick={onFilterClick}
              isLoading={isLoading}
              isAuth={isAuth}
              user={user}
            />
          </Route>
          <Route exact path={RoutePath.LOGIN}>
            <SignIn
              message={userErrors[0]}
              isAuth={isAuth}
              onSignIn={auth}
            />
          </Route>
          <Route exact path={RoutePath.MOVIE}>
            <MoviePageWrapped
              movies={movies}
              commentList={commentList}
              getCommentList={getCommentList}
              addedMovies={addedMovies}
              movie={activeMovie}
              onMovieCardClick={onMovieCardClick}
              isAuth={isAuth}
              user={user}
              toggleMovieInList={toggleMovieInList}
            />
          </Route>
          <PrivateRoute isAuth={isAuth} exact path={RoutePath.MYLIST}>
            <MyListPage
              user={user}
              movies={addedMovies}
              onClick={onMovieCardClick}
              getFavoriteMovies={getFavoriteMovies}
            />
          </PrivateRoute>
          <PrivateRoute isAuth={isAuth} exact path={RoutePath.REVIEW}>
            <AddReviewPageWrapped
              user={user}
              movie={activeMovie}
              sendReview={sendReview}
            />
          </PrivateRoute>
        </Switch>
      </Router>
    }
  </>;
};

const mapStateToProps = ({app, user}) => ({
  promoMovie: app.promoMovie,
  isAuth: user.isAuth,
  user: user.user,
  movies: app.movies,
  filteredMovies: app.filteredMovies,
  genres: app.genres,
  isLoading: app.isLoading,
  appErrors: app.errors,
  userErrors: user.errors,
  addedMovies: app.addedMovies,
  commentList: app.commentList,
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
  toggleMovieInList: (movieId, movieStatus) => {
    dispatch(toggleFavoriteMovieAsync(movieId, movieStatus));
  },
  getFavoriteMovies: () => {
    dispatch(getFavoriteMoviesAsync());
  },
  getPromoMovie: () => {
    dispatch(getPromoMovieAsync());
  },
  getCommentList: (movie) => {
    dispatch(getCommentListAsync(movie));
  }
});

const MemoizedApp = React.memo(App);

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(MemoizedApp);
