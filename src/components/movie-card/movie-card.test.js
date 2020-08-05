import MovieCard from './movie-card.tsx';
import {BrowserRouter as Router} from 'react-router-dom';

const movie = {
  name: `movie 1`,
  img: `img/img-1.jpg`,
};

describe(`MovieCard snapshot test`, () => {
  const onClick = jest.fn(() => {});

  it(`MovieCard should render movie`, () => {
    const tree = renderer.create(
        <Router>
          <MovieCard
            movie={movie}
            onClick={onClick}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
