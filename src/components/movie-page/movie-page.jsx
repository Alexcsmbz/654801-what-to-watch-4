import {Fragment} from 'react';
import NavTabs from 'components/nav-tabs/nav-tabs.jsx';
import NavTabActive from 'components/nav-tab-active/nav-tab-active.jsx';
import NavTab from 'components/nav-tab/nav-tab.jsx';
import Overview from 'components/overview/overview.jsx';
import Details from 'components/details/details.jsx';
import Reviews from 'components/reviews/reviews.jsx';
import Subpages from 'components/subpages/subpages.jsx';
import MovieCardList from 'components/movie-card-list/movie-card-list.jsx';
import movies from 'mock/movies.js';
import {moviePageTabs} from 'config';
import Logo from 'components/logo/logo.jsx';
import Button from 'components/button/button.jsx';

const MoviePage = (props) => {
  const {name, genre, releaseDate, promo, poster} = props.movie;
  const {onMovieCardClick, activeIdx, setActiveIdx} = props;

  return <Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={promo} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo />

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
              <Button
                button={{
                  name: `Play`,
                  onClick: () => {},
                  className: `btn--play`
                }}
                icon={{
                  iconKey: `#play-s`,
                  width: `19`,
                  height: `19`,
                }}
              />
              <Button
                button={{
                  name: `My list`,
                  onClick: () => {},
                  className: `btn--list`
                }}
                icon={{
                  iconKey: `#add`,
                  width: `19`,
                  height: `20`,
                }}
              />

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
              {moviePageTabs.map((tab, idx) => idx === activeIdx
                ? <NavTabActive onClick={() => setActiveIdx(idx)} key={tab.name} tab={tab} />
                : <NavTab onClick={() => setActiveIdx(idx)} key={tab.name} tab={tab} />)}
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
            movies={movies}
            activeMovie={props.movie}
            onClick={onMovieCardClick}
          />
        </div>
      </section>

      <footer className="page-footer">
        <Logo className="logo__link--light" />

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
  onMovieCardClick: propTypes.func,
  activeIdx: propTypes.number.isRequired,
  setActiveIdx: propTypes.func,
};

export default MoviePage;
