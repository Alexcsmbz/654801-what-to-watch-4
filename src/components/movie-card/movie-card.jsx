const MovieCard = (props) => {
  const {movie, onClick, onMouseEnter, onMouseLeave} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(movie)}
      onMouseLeave={() => onMouseLeave()}
    >
      <div className="small-movie-card__image">
        <img src={movie.img} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={onClick}>
        <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: propTypes.shape({
    name: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
  }).isRequired,
  onClick: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
};

export default MovieCard;
