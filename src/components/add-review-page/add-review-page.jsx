import Logo from 'components/logo/logo.jsx';
import ReviewPoint from 'components/review-point/review-point.jsx';
import {useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonStyled} from './styles.js';

const AddReviewPage = (props) => {
  const points = [1, 2, 3, 4, 5];
  const {sendReview, isAuth, review, setReview, movie} = props;
  const {push} = useHistory();
  const textareaRef = useRef(null);
  const isValid = (value) => value <= 50 || value >= 400 ? true : false;

  useEffect(() => {
    setReview({...review, movieId: movie.id});
    if (isAuth) {
      push(`/sign-in`);
    }
  }, []);

  const onClick = (p) => {
    setReview({...review, rating: p});
  };

  const onChange = () => {
    const value = textareaRef.current.value;
    setReview({...review, comment: value});
  };

  const onSendReview = (r) => {
    if (!isValid(r.comment.length)) {
      sendReview(r);
    }
  };

  return <section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <Logo />

        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__poster movie-card__poster--small">
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>
    </div>

    <div className="add-review">
      <form className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {points.map((p) =>
              <ReviewPoint
                onClick={() => onClick(p)}
                key={`point-${p}`}
                value={p}
              />)}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            onChange={onChange}
            ref={textareaRef}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <ButtonStyled
              isDisabled={isValid(review.comment.length)}
              disabled={isValid(review.comment.length)}
              onClick={() => onSendReview(review)}
              className="add-review__btn"
              type="button"
            >Post</ButtonStyled>
          </div>
        </div>
      </form>
    </div>

  </section>;
};

AddReviewPage.propTypes = {
  sendReview: propTypes.func,
  isAuth: propTypes.bool,
  review: propTypes.object,
  movie: propTypes.object,
  setReview: propTypes.func,
};

export default AddReviewPage;
