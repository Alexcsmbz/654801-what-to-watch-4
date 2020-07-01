import Main from 'components/main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import MoviePage from 'components/movie-page/movie-page.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const App = (props) => {
  const {name, genre, releaseDate, movies} = props;
  const [activeMovie, setActiveMovie] = useState({});
  const onMovieCardClick = (movie) => {
    window.scrollTo(0, 0);
    setActiveMovie(movie);
  };

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main
          name={name}
          genre={genre}
          releaseDate={releaseDate}
          movies={movies}
          onClick={onMovieCardClick}
        />
      </Route>
      <Route exact path="/movie-page/:id">
        <MoviePage
          movie={activeMovie}
          onClick={onMovieCardClick}
        />
      </Route>
    </Switch>
  </BrowserRouter>;
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
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (genre) => dispatch(ActionCreator.changeFilterByGenre(genre)),
});

export {App};
// export default connect(mapStateToProps, mapDispatchToProps)(App);
