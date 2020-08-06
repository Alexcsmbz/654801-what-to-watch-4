import Reviews from './reviews';

describe(`Reviews snapshot test`, () => {
  it(`Reviews should render movie details`, () => {
    const tree = renderer.create(
        <Reviews commentList={[]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
