import Logo from 'components/logo/logo.jsx';
import Footer from 'components/footer/footer.jsx';
import MovieCardList from 'components/movie-card-list/movie-card-list.jsx';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

const MyListPage = (props) => {
  const {movies, activeMovie, onClick, getFavoriteMovies} = props;

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  return <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">My list</h1>
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <div className="catalog__movies-list">
        {
          movies.length !== 0 && <MovieCardList
            movies={movies}
            onClick={onClick}
            moviesAmount={8}
          /> || <div style={{display: `grid`, margin: `auto`, justifyItems: `center`}}>
            <h2 className="catalog__title">You have no movies added yet &#127917;</h2>
            <Link className="catalog__title" to="/">Go home and add</Link>
          </div>
        }
      </div>
    </section>
    <Footer />
  </div>;
};

MyListPage.propTypes = {
  movies: propTypes.array,
  activeMovie: propTypes.object,
  onClick: propTypes.func,
  getFavoriteMovies: propTypes.func,
};

export default MyListPage;
