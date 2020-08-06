import MovieCardList from './movie-card-list';
import {BrowserRouter as Router} from 'react-router-dom';
import {testMovies} from 'config';

describe(`MovieCardList snapshot test`, () => {
  it(`MovieCardList should render movie list`, () => {
    const tree = renderer.create(
        <Router>
          <MovieCardList
            movies={testMovies}
            onClick={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
