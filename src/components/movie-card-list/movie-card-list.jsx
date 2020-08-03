import MovieCard from 'components/movie-card/movie-card.jsx';

const MovieCardList = (props) => {
  const {movies, onClick, activeMovie, moviesAmount} = props;

  const resultMovies = activeMovie
    ? movies.filter((movie) => movie.genre === activeMovie.genre && movie !== activeMovie)
    : movies;

  if (moviesAmount) {
    return resultMovies.map((movie, idx) =>
      idx < moviesAmount ?
        <MovieCard
          key={movie.name}
          movie={movie}
          onClick={onClick}
        /> : null);
  }

  return resultMovies.map((movie, idx) =>
    <MovieCard
      key={movie.name}
      movie={movie}
      onClick={onClick}
    />);
};

MovieCardList.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({
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
  }),
  moviesAmount: propTypes.number,
};

export default MovieCardList;
