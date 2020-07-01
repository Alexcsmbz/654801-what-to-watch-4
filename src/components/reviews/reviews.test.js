import Reviews from './reviews.jsx';

describe(`Reviews snapshot test`, () => {
  it(`Reviews should render movie details`, () => {
    const tree = renderer.create(
        <Reviews />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
