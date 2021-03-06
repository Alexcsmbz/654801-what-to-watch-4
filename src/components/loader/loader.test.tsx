import Loader from './loader';

describe(`Loader snapshot test`, () => {
  it(`Loader should render loader`, () => {
    const tree = renderer.create(
        <Loader isLoading={true} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
