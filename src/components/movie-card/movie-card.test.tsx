import MovieCard from './movie-card';
import {BrowserRouter as Router} from 'react-router-dom';
import {testMovie} from 'config';

describe(`MovieCard snapshot test`, () => {
  const onClick = jest.fn(() => {});

  it(`MovieCard should render movie`, () => {
    const tree = renderer.create(
        <Router>
          <MovieCard
            movie={testMovie}
            onClick={onClick}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
