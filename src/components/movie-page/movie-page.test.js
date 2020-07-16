import {BrowserRouter as Router} from 'react-router-dom';
import MoviePage from './movie-page.jsx';

const movie = {
  name: `name`,
  genre: `genre`,
  releaseDate: `releaseDate`,
  promo: `promo`,
  poster: `poster`,
};

describe(`MoviePage snapshot test`, () => {
  it(`MoviePage should render movie info`, () => {
    const tree = renderer.create(
        <Router>
          <MoviePage
            movie={movie}
            activeIdx={0}
            setActiveIdx={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
