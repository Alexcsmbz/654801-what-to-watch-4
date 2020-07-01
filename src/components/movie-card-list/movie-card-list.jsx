import MovieCard from 'components/movie-card/movie-card.jsx';
import {useState} from 'react';

const MovieCardList = (props) => {
  const {films, onClick, activeMovie} = props;
  const [movieOnFocus, setMovieOnFocus] = useState({});

  const onMouseEnter = (movie) => setMovieOnFocus(movie);
  const onMouseLeave = () => setMovieOnFocus({});

  return activeMovie
    ? films.map((movie) => {
      if (movie.genre === activeMovie.genre) {
        return <MovieCard
          key={movie.name}
          movie={movie}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />;
      }
      return null;
    })
    : films.map((movie) =>
      <MovieCard
        key={movie.name}
        movie={movie}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />);
};

MovieCardList.propTypes = {
  films: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    img: propTypes.string,
  })).isRequired,
  onClick: propTypes.func,
  activeMovie: propTypes.shape({
    name: propTypes.string,
    thumbnail: propTypes.string,
    genre: propTypes.string,
    releaseDate: propTypes.string,
    promo: propTypes.string,
    poster: propTypes.string,
    previewMp4: propTypes.string,
    previewWebm: propTypes.string,
  })
};

export default MovieCardList;
