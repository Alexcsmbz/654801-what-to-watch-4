import MovieCardList from 'components/movie-card-list/movie-card-list.jsx';
import {Fragment, useEffect} from 'react';
import GenreList from 'components/genre-list/genre-list.jsx';
import GenreListItem from 'components/genre-list-item/genre-list-item.jsx';
import GenreListItemActive from 'components/genre-list-item-active/genre-list-item-active.jsx';
import ButtonMore from 'components/button-more/button-more.jsx';
import Button from 'components/button/button.jsx';
import Logo from 'components/logo/logo.jsx';
import MoviePlayer from 'components/movie-player/movie-player.jsx';

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
    setMoviesAmount,
    isFullscreen,
    setIsFullscreen
  } = props;

  const DEFAULT_MOVIES_AMOUNT = 8;

  const movie = {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    thumbnail: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedies`,
    releaseDate: `2014`,
    promo: `promo`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewMp4: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewWebm: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  };

  const openMovie = () => setIsFullscreen(true);
  const closeMovie = () => console.log(`close movie`);
  const onFullscreenChange = () => isFullscreen ? setIsFullscreen(false) : setIsFullscreen(true);

  const isMaxMovieShow = (moviesArray, amount) => moviesArray.length > amount;

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
    <div className="visually-hidden">
      {isFullscreen && <MoviePlayer onFullscreenChange={onFullscreenChange} movie={movie} isFullscreen={isFullscreen} />}
    </div>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
              <Button
                button={{
                  name: `Play`,
                  onClick: openMovie,
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
                  onClick: () => console.log(`click`),
                  className: `btn--list`
                }}
                icon={{
                  iconKey: `#add`,
                  width: `19`,
                  height: `20`,
                }}
              />
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
            <ButtonMore
              onClick={showMoreMovies}
              className="catalog__button"
              name="Show more"
            />
          }
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
  isFullscreen: propTypes.bool,
  setIsFullscreen: propTypes.func,
};

export default Main;
