import {useRef} from 'react';
import {dateOptions} from 'config';
import {ICommentGet} from 'types/app';

interface IProps {
  commentList: Array<ICommentGet>,
}

const Reviews: React.FC<IProps> = ({commentList}: IProps) => {
  const COLS_AMOUNT = 2;
  const START_ELEMENT = 0;
  const _splitList = useRef([
    [...commentList.slice(START_ELEMENT, Math.round(commentList.length / COLS_AMOUNT))],
    [...commentList.slice(Math.round(commentList.length / COLS_AMOUNT))],
  ]).current;
  const [_firstCol, _secondCol] = _splitList;

  return <div className="movie-card__reviews movie-card__row">
    {
      commentList.length !== 0 && <>
        <div className="movie-card__reviews-col">
          {
            _firstCol.map(({comment, date, id, rating, user}) => <div key={id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{user.name}</cite>
                  <time className="review__date" dateTime={new Date(date).toLocaleDateString()}>{new Date(date).toLocaleDateString(`en-EN`, dateOptions)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{rating}</div>
            </div>)
          }
        </div>
        <div className="movie-card__reviews-col">
          {
            _secondCol.map(({comment, date, id, rating, user}) => <div key={id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{user.name}</cite>
                  <time className="review__date" dateTime={new Date(date).toLocaleDateString()}>{new Date(date).toLocaleDateString(`en-EN`, dateOptions)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{rating}</div>
            </div>)
          }
        </div>
      </>
      || <p style={{color: `#0c0101`}}>No reviews yet...</p>
    }
  </div>;
};

const MemoizedReviews = React.memo(Reviews);

export default MemoizedReviews;
