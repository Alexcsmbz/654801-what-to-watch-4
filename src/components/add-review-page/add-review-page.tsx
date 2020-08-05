import Logo from 'components/logo/logo.tsx';
import ReviewPoint from 'components/review-point/review-point.tsx';
import {useEffect, useRef} from 'react';
import {ButtonStyled} from './styles.js';
import {Link, useHistory} from 'react-router-dom';
import { baseURL } from 'config';

interface IProps {

}

const AddReviewPage = (props) => {
  const points = useRef([1, 2, 3, 4, 5]).current;
  const {sendReview, review, setReview, movie, user} = props;
  const {posterImage, backgroundImage, name, id, backgroundColor} = props.movie;
  const textareaRef = useRef(null);
  const isValid = (value) => value <= 50 || value >= 400 ? true : false;
  const {push} = useHistory();

  useEffect(() => {
    setReview({...review, movieId: movie.id});
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
      push(`/films/${id}`);
    }
  };

  return <section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div style={{backgroundColor}} className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header">
        <Logo />
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
        <div className="user-block">
          <div className="user-block__avatar">
            <Link to="/mylist">
              <img src={`${baseURL}${user.avatarUrl}`} alt={`${user.name} avatar`} width="63" height="63" />
            </Link>
          </div>
        </div>
      </header>
      <div className="movie-card__poster movie-card__poster--small">
        <img src={posterImage} alt={name} width="218" height="327" />
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

export default AddReviewPage;
