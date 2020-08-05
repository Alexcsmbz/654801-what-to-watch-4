import {Link} from 'react-router-dom';
import MoviePlayer from 'components/movie-player/movie-player.tsx';
import {useHistory} from 'react-router-dom';

const MovieCard = (props) => {
  const {movie, onClick} = props;
  const {push} = useHistory();

  const goToMovie = (path) => {
    push(path);
  };

  return <article
    className="small-movie-card catalog__movies-card"
    onClick={() => onClick(movie)}
  >
    <div onClick={() => goToMovie(`/films/${movie.id}`)}>
      <MoviePlayer movie={movie} />
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${movie.id}`}>{movie.name}</Link>
      </h3>
    </div>
  </article>;
};

export default MovieCard;
