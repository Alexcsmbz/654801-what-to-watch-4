import MovieCard from './movie-card.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

const movie = {
  name: `Film 1`,
  img: `img/img-1.jpg`,
};

describe(`MovieCard snapshot test`, () => {
  it(`MovieCard should render movie`, () => {
    const tree = renderer.create(
        <Router>
          <MovieCard
            movie={movie}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
