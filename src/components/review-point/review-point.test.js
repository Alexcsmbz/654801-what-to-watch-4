import ReviewPoint from './review-point.tsx';

describe(`ReviewPoint snapshot test`, () => {
  it(`ReviewPoint should render review point`, () => {
    const tree = renderer.create(
        <ReviewPoint
          onClick={() => {}}
          key="key"
          value={5}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
