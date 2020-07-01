import Main from 'components/main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import MoviePage from 'components/movie-page/movie-page.jsx';

const App = (props) => {
  const {name, genre, releaseDate, films} = props;
  const [activeMovie, setActiveMovie] = useState({});
  const onClick = (movie) => {
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
          films={films}
          onClick={onClick}
        />
      </Route>
      <Route exact path="/movie-page/:id">
        <MoviePage
          movie={activeMovie}
          onClick={onClick}
        />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  name: propTypes.string.isRequired,
  genre: propTypes.string.isRequired,
  releaseDate: propTypes.string.isRequired,
  films: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    img: propTypes.string,
  })).isRequired,
};

export default App;
