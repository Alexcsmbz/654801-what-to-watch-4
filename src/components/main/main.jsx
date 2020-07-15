import MovieCardList from 'components/movie-card-list/movie-card-list.jsx';
import {Fragment} from 'react';
import GenreList from 'components/genre-list/genre-list.jsx';
import GenreListItem from 'components/genre-list-item/genre-list-item.jsx';
import GenreListItemActive from 'components/genre-list-item-active/genre-list-item-active.jsx';
import Button from 'components/button/button.jsx';

const Main = (props) => {
  const {
    movieName,
    genre,
    releaseDate,
    movies,
    onMovieCardClick,
    onFilterClick,
    genres,
    activeIdx,
    setActiveIdx,
    moviesAmount,
    setMoviesAmount
  } = props;

  const DEFAULT_MOVIES_AMOUNT = 8;

  const isMaxMovieShow = (moviesArray, movieShowCtn) => moviesArray.length > movieShowCtn;

  const onGenreItemClick = (item, idx) => {
    onFilterClick(item);
    setActiveIdx(idx);
    setMoviesAmount(DEFAULT_MOVIES_AMOUNT);
  };

  const showMoreMovies = () =>
    isMaxMovieShow(movies, moviesAmount)
      ? setMoviesAmount(moviesAmount + DEFAULT_MOVIES_AMOUNT)
      : undefined;

  return <Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
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
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movieName}</h2>
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
            </div>
          </div>
        </div>
      </div >
    </section >

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreList>
          {genres.map((g, idx) => idx === activeIdx
            ? <GenreListItemActive onClick={() => onGenreItemClick(g, idx)} key={g} item={g} />
            : <GenreListItem onClick={() => onGenreItemClick(g, idx)} key={g} item={g} />)}
        </GenreList>

        <div className="catalog__movies-list">
          <MovieCardList
            movies={movies}
            onClick={onMovieCardClick}
            moviesAmount={moviesAmount}
          />
        </div>

        <div className="catalog__more">
          {
            isMaxMovieShow(movies, moviesAmount) &&
            <Button
              onClick={showMoreMovies}
              className="catalog__button"
              name="Show more"
            />
          }
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
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

Main.propTypes = {
  movieName: propTypes.string.isRequired,
  genre: propTypes.string.isRequired,
  releaseDate: propTypes.string.isRequired,
  movies: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    img: propTypes.string,
  })).isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  onMovieCardClick: propTypes.func,
  onFilterClick: propTypes.func,
  activeIdx: propTypes.number.isRequired,
  setActiveIdx: propTypes.func,
  moviesAmount: propTypes.number.isRequired,
  setMoviesAmount: propTypes.func,
};

export default Main;
