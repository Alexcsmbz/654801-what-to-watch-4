import {formatNumericToWord} from 'utils/utils.js';
import {IMovie} from 'types/app'

interface IProps {
  movie: IMovie,
}

const Overview: React.FC<IProps> = ({movie} : IProps) => {
  const {description, rating, director, starring, scoresCount} = movie;

  return <>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{formatNumericToWord(rating)}</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
    <div className="movie-card__text">
      <p>{description}</p>
      <p className="movie-card__director"><strong>Director: {director}</strong></p>
      <p className="movie-card__starring">
        <strong>
          Starring: {
            starring.map((s) => <strong key={s}>{s}, </strong>)
          }and other...
        </strong>
      </p>
    </div>
  </>;
};

export default Overview;
