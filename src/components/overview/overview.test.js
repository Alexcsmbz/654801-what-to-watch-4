import Overview from './overview.jsx';

describe(`Overview snapshot test`, () => {
  it(`Overview should render movie details`, () => {
    const tree = renderer.create(
        <Overview />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
