import MovieCardList from './movie-card-list.tsx';
import {BrowserRouter as Router} from 'react-router-dom';

const movies = [
  {
    name: `movie 1`,
    img: `img/img-1.jpg`,
  },
  {
    name: `movie 2`,
    img: `img/img-2.jpg`,
  },
  {
    name: `movie 3`,
    img: `img/img-3.jpg`,
  },
  {
    name: `movie 4`,
    img: `img/img-4.jpg`,
  },
];
const movieShow = 8;

describe(`MovieCardList snapshot test`, () => {
  it(`MovieCardList should render movie list`, () => {
    const tree = renderer.create(
        <Router>
          <MovieCardList
            movies={movies}
            movieShow={movieShow}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
