import {useEffect} from 'react';
import Main from 'components/main/main.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MoviePage from 'components/movie-page/movie-page.jsx';
import {connect} from 'react-redux';
import ActionCreator from 'ducks/app/action-creator.js';
import withActiveItem from 'hocs/with-active-item.jsx';
import withMaxAmount from 'hocs/with-max-amount.jsx';
import withFullscreen from 'hocs/with-fullscreen.jsx';
import {getMoviesAsync} from 'middleware/thunks.js';
import Loader from 'components/loader/loader.jsx';
import Popup from 'components/popup/popup.jsx';

const MoviePageWrapped = withFullscreen(withActiveItem(MoviePage));
const MainWrapped = withFullscreen(withMaxAmount(withActiveItem(Main)));

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
    isLoading,
    errors,
  } = props;

  const onMovieCardClick = (movie) => {
    window.scrollTo(0, 0);
    setActiveMovie(movie);
  };

  useEffect(() => {
    getMovies();
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
              movies={movies}
              genres={genres}
              onMovieCardClick={onMovieCardClick}
              onFilterClick={onFilterClick}
              isLoading={isLoading}
            />
          </Route>
          <Route exact path="/movie-page/:id">
            <MoviePageWrapped
              movie={activeMovie}
              onMovieCardClick={onMovieCardClick}
            />
          </Route>
        </Switch>
      </Router>
    }
  </>;
};

App.propTypes = {
  name: propTypes.string,
  genre: propTypes.string,
  releaseDate: propTypes.string,
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
  isLoading: propTypes.bool,
  errors: propTypes.arrayOf(propTypes.string),
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  genres: state.genres,
  isLoading: state.isLoading,
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (genre) => {
    dispatch(ActionCreator.changeFilterByGenre(genre));
    dispatch(ActionCreator.getMovieListByGenre(genre));
  },
  getMovies: () => {
    dispatch(getMoviesAsync());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
