import MovieCardList from 'components/movie-card-list/movie-card-list.tsx';
import GenreList from 'components/genre-list/genre-list.tsx';
import GenreListItem from 'components/genre-list-item/genre-list-item.tsx';
import GenreListItemActive from 'components/genre-list-item-active/genre-list-item-active.tsx';
import Button from 'components/button/button.tsx';
import MoviePlayerFullscreen from 'components/movie-player-fullscreen/movie-player-fullscreen.tsx';
import Header from 'components/header/header.tsx';
import Footer from 'components/footer/footer.tsx';
import {useHistory} from 'react-router-dom';
import {toggleStatus} from 'utils/utils.js';

const Main = (props) => {
  const {
    promoMovie,
    movies,
    addedMovies,
    onMovieCardClick,
    onFilterClick,
    genres,
    activeIdx,
    setActiveIdx,
    moviesAmount,
    setMoviesAmount,
    isFullscreen,
    setIsFullscreen,
    openFullscreen,
    isAuth,
    user,
    toggleMovieInList,
  } = props;

  const {
    name,
    genre,
    released,
    posterImage,
    previewImage,
    backgroundImage,
    backgroundColor,
    id,
  } = props.promoMovie;

  const {push} = useHistory();

  const onAddMyList = (movie, movieStatus) => {
    if (isAuth) {
      toggleMovieInList(movie, movieStatus);
    } else {
      push(`/login`);
    }
  };

  const DEFAULT_MOVIES_AMOUNT = 8;

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

  return <>
    <div className="visually-hidden">
      <MoviePlayerFullscreen
        setIsFullscreen={setIsFullscreen}
        movie={promoMovie}
        isFullscreen={isFullscreen}
      />
    </div>
    <section className="movie-card">
      <div style={{backgroundColor}} className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header user={user} isAuth={isAuth} />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
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
                  onClick: () => onAddMyList(promoMovie, toggleStatus(addedMovies, promoMovie)),
                  className: `btn--list btn movie-card__button`
                }}
                icon={{
                  iconKey: toggleStatus(addedMovies, promoMovie) ? `#add` : `#in-list`,
                  width: `19`,
                  height: `20`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
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
              button={{
                onClick: showMoreMovies,
                className: `catalog__button`,
                name: `Show more`
              }}
            />
          }
        </div>
      </section>
      <Footer />
    </div>
  </>;
};

Main.propTypes = {
  promoMovie: propTypes.object,
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
  openFullscreen: propTypes.func,
  isAuth: propTypes.bool,
  user: propTypes.object,
  toggleMovieInList: propTypes.func,
  addedMovies: propTypes.array,
};

export default Main;
