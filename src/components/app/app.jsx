import {useEffect} from 'react';
import Main from 'components/main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MoviePage from 'components/movie-page/movie-page.jsx';
import {connect} from 'react-redux';
import ActionCreator from 'store/action-creator.js';
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
  const mes = `network err`;
  return <>
    <Popup message={mes} />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Loader isLoading={isLoading} />
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
    </BrowserRouter>
  </>;
};

App.propTypes = {
  name: propTypes.string.isRequired,
  genre: propTypes.string.isRequired,
  releaseDate: propTypes.string.isRequired,
  movies: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    genre: propTypes.string,
    releaseDate: propTypes.string,
    promo: propTypes.string,
    poster: propTypes.string,
    previewMp4: propTypes.string,
    previewWebm: propTypes.string,
  })).isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
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
