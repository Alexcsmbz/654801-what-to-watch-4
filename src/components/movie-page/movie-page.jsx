import {Fragment, useState} from 'react';
import NavTabs from 'components/nav-tabs/nav-tabs.jsx';
import NavTabActive from 'components/nav-tab-active/nav-tab-active.jsx';
import NavTab from 'components/nav-tab/nav-tab.jsx';
import Overview from 'components/overview/overview.jsx';
import Details from 'components/details/details.jsx';
import Reviews from 'components/reviews/reviews.jsx';
import Subpages from 'components/subpages/subpages.jsx';
import MovieCardList from 'components/movie-card-list/movie-card-list.jsx';
import films from 'mock/films.js';

const MoviePage = (props) => {
  const {name, genre, releaseDate, promo, poster} = props.movie;
  const {onClick} = props;
  const tabs = [
    {
      name: `Overview`,
      isActive: true,
      idx: 0,
    },
    {
      name: `Details`,
      isActive: false,
      idx: 1,
    },
    {
      name: `Reviews`,
      isActive: false,
      idx: 2,
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return <Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={promo} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={poster} alt={name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <NavTabs>
              {tabs.map((tab) => tab.idx === activeIdx
                ? <NavTabActive onClick={() => setActiveIdx(tab.idx)} key={tab.idx} tab={tab} />
                : <NavTab onClick={() => setActiveIdx(tab.idx)} key={tab.idx} tab={tab} />)}
            </NavTabs>

            <Subpages idx={activeIdx}>
              <Overview />
              <Details />
              <Reviews />
            </Subpages>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <MovieCardList
            films={films}
            activeMovie={props.movie}
            onClick={onClick}
          />
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </Fragment>;
};

MoviePage.propTypes = {
  movie: propTypes.shape({
    name: propTypes.string,
    genre: propTypes.string,
    releaseDate: propTypes.string,
    promo: propTypes.string,
    poster: propTypes.string,
  }).isRequired,
  onClick: propTypes.func,
};

export default MoviePage;
