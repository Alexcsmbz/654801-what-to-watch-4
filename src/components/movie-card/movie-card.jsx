import {Link} from 'react-router-dom';
import {formatNameToPath} from 'utils/utils.js';

const MovieCard = (props) => {
  const {movie, onClick, onMouseEnter, onMouseLeave} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onClick(movie)}
      onMouseEnter={() => onMouseEnter(movie)}
      onMouseLeave={() => onMouseLeave()}
    >
      <div className="small-movie-card__image">
        <img src={movie.thumbnail} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/movie-page/${formatNameToPath(movie.name)}`}>{movie.name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: propTypes.shape({
    genre: propTypes.string,
    releaseDate: propTypes.string,
    promo: propTypes.string,
    poster: propTypes.string,
    name: propTypes.string,
    thumbnail: propTypes.string,
  }).isRequired,
  onClick: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
};

export default MovieCard;
