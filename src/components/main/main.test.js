import Main from './main.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

const name = `Whatever movie`;
const genre = `Criminal`;
const releaseDate = `1999`;
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
const genres = [
  `Comedy`,
  `Drama`,
  `Crime`,
];

describe(`Main snapshot test`, () => {
  it(`Main should render movies name, genre, relise date, movies list`, () => {
    const tree = renderer.create(
        <Router>
          <Main
            genres={genres}
            movieName={name}
            genre={genre}
            releaseDate={releaseDate}
            movies={movies}
            activeIdx={0}
            setActiveIdx={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
