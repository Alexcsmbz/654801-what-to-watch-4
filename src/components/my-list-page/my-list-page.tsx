import Logo from 'components/logo/logo.tsx';
import Footer from 'components/footer/footer.tsx';
import MovieCardList from 'components/movie-card-list/movie-card-list.tsx';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {baseURL} from 'config';
import { IMovie, IUser } from 'types/app';

interface IProps {
  movies: Array<IMovie>,
  onClick: (movie: IMovie) => void,
  getFavoriteMovies: () => void,
  user: IUser,
}

const MyListPage: React.FC<IProps> = (props: IProps) => {
  const {movies, onClick, getFavoriteMovies, user} = props;

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  return <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">My list</h1>
      <div className="user-block">
        <div className="user-block__avatar">
          <img src={`${baseURL}${user.avatarUrl}`} alt={`${user.name} avatar`} width="63" height="63" />
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

export default MyListPage;
