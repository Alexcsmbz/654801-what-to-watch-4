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
import Button from 'components/button/button.jsx';
import MoviePlayerFullscreen from 'components/movie-player-fullscreen/movie-player-fullscreen.jsx';
import Header from 'components/header/header.jsx';
import Footer from 'components/footer/footer.jsx';
import {useHistory} from 'react-router-dom';

const MoviePage = (props) => {
  const {name, genre, releaseDate, promo, poster} = props.movie;
  const {
    onMovieCardClick,
    activeIdx,
    setActiveIdx,
    isFullscreen,
    setIsFullscreen,
    movie,
    openFullscreen,
    isAuth,
    user,
  } = props;

  const {push} = useHistory();

  const navigateTo = (path) => {
    push(path);
  };

  return <>
    <div className="visually-hidden">
      <MoviePlayerFullscreen
        setIsFullscreen={setIsFullscreen}
        movie={movie}
        isFullscreen={isFullscreen}
      />
    </div>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={promo} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header user={user} isAuth={isAuth} />
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
                  onClick: openFullscreen,
                  className: `btn--play btn movie-card__button`
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
                  className: `btn--list btn movie-card__button`
                }}
                icon={{
                  iconKey: `#add`,
                  width: `19`,
                  height: `20`,
                }}
              />
              {isAuth && <Button
                button={{
                  name: `Add review`,
                  onClick: () => navigateTo(`/add-review-page`),
                  className: `btn movie-card__button`,
                }}
              />}
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
      <Footer />
    </div>
  </>;
};

MoviePage.propTypes = {
  isAuth: propTypes.bool,
  user: propTypes.object,
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
  isFullscreen: propTypes.bool,
  setIsFullscreen: propTypes.func,
  openFullscreen: propTypes.func,
};

export default MoviePage;
