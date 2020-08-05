import MoviePlayer from './movie-player.tsx';

const movie = {
  name: `name`,
  genre: `genre`,
  releaseDate: `releaseDate`,
  promo: `promo`,
  poster: `poster`,
  previewMp4: `.mp4`,
  previewWebm: `.webm`
};

describe(`MoviePlayer snapshot test`, () => {
  it(`MoviePlayer should render movie info`, () => {
    const tree = renderer.create(
        <MoviePlayer movie={movie} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
