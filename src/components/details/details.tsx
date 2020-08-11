import {useRef} from 'react';
import {IMovie} from 'types/app';

interface IProps {
  movie: IMovie,
}

const Details: React.FC<IProps> = (props: IProps) => {
  const {director, starring, runTime, genre, released} = props.movie;
  const SECONDS = 60;
  const _hours = useRef(Math.floor(runTime / SECONDS)).current;
  const _minutes = useRef(runTime % SECONDS).current;

  return <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{director}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {starring.map((s) => <span key={s}>{s}<br/></span>)}
        </span>
      </p>
    </div>
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{_hours}h {_minutes}m</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{released}</span>
      </p>
    </div>
  </div>;
};

const MemoizedDetails = React.memo(Details);

export default MemoizedDetails;
