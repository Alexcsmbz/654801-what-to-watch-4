import MovieCard from 'components/movie-card/movie-card.tsx';

const MovieCardList = (props) => {
  const {movies, onClick, activeMovie, moviesAmount} = props;

  const resultMovies = activeMovie
    ? movies.filter((movie) => movie.genre === activeMovie.genre && movie.id !== activeMovie.id)
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
  movies: propTypes.array,
  onClick: propTypes.func,
  activeMovie: propTypes.object,
  moviesAmount: propTypes.number,
};

export default MovieCardList;
