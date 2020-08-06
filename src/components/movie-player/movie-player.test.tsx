import MoviePlayer from './movie-player';
import {testMovie} from 'config';

describe(`MoviePlayer snapshot test`, () => {
  it(`MoviePlayer should render movie info`, () => {
    const tree = renderer.create(
        <MoviePlayer movie={testMovie} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
