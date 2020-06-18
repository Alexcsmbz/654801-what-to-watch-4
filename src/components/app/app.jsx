import Main from 'components/main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import MoviePage from 'components/movie-page/movie-page.jsx';

const App = (props) => {
  const {name, genre, reliseDate, films} = props;
  const [activeMovie, setActiveMovie] = useState({});
  const onClick = (movie) => setActiveMovie(movie);

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main
          name={name}
          genre={genre}
          reliseDate={reliseDate}
          films={films}
          onClick={onClick}
        />
      </Route>
      <Route exact path="/movie-page/:id">
        <MoviePage movie={activeMovie} />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  name: propTypes.string.isRequired,
  genre: propTypes.string.isRequired,
  reliseDate: propTypes.string.isRequired,
  films: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    img: propTypes.string,
  })).isRequired,
};

export default App;
