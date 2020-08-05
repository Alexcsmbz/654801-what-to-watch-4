import {useRef} from 'react';
import {dateOptions} from 'config';

const Reviews = (props) => {
  const {commentList} = props;
  const splitList = useRef([
    [...commentList.slice(0, Math.round(commentList.length / 2))],
    [...commentList.slice(Math.round(commentList.length / 2))],
  ]).current;
  const [firstCol, secondCol] = splitList;

  return <div className="movie-card__reviews movie-card__row">
    {
      commentList.length !== 0 && <>
        <div className="movie-card__reviews-col">
          {
            firstCol.map(({comment, date, id, rating, user}) => <div key={id} className="review">
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
            secondCol.map(({comment, date, id, rating, user}) => <div key={id} className="review">
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

export default Reviews;
