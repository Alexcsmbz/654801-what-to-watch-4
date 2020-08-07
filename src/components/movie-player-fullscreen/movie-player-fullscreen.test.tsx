import MoviePlayerFullscreen from './movie-player-fullscreen';
import {testMovie} from 'config';

describe(`MoviePlayerFullscreen snapshot test`, () => {
  it(`MoviePlayerFullscreen should render fullscreen movie player`, () => {
    const tree = renderer.create(
        <MoviePlayerFullscreen
          setIsFullscreen={() => {}}
          movie={testMovie}
          isFullscreen={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
