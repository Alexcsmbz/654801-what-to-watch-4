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
        <MoviePage movie={movie} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
