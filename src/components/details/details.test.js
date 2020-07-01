import Details from './details.jsx';

describe(`Details snapshot test`, () => {
  it(`Details should render movie details`, () => {
    const tree = renderer.create(
        <Details />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
