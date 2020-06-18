import MovieCard from 'components/movie-card/movie-card.jsx';
import {useState} from 'react';

const MovieCardList = (props) => {
  const {films, onClick} = props;
  const [movieOnFocus, setMovieOnFocus] = useState({});

  const onMouseEnter = (movie) => setMovieOnFocus({movieOnFocus: movie});
  const onMouseLeave = () => setMovieOnFocus({});

  return films.map((movie) =>
    <MovieCard
      key={movie.name}
      movie={movie}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

MovieCardList.propTypes = {
  films: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    img: propTypes.string,
  })).isRequired,
  onClick: propTypes.func,
};

export default MovieCardList;
