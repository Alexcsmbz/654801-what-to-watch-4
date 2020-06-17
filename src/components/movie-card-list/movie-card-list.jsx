import MovieCard from 'components/movie-card/movie-card.jsx';
import {useState} from 'react';

const MovieCardList = (props) => {
  const {films} = props;
  // eslint-disable-next-line no-unused-vars
  const [movieOnFocus, setMovieOnFocus] = useState({});

  const onMouseEnter = (movie) => setMovieOnFocus({movieOnFocus: movie});
  const onMouseLeave = () => setMovieOnFocus({});

  return films.map((movie) =>
    <MovieCard
      key={movie.name}
      movie={movie}
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
};

export default MovieCardList;
