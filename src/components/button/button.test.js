import Button from './button.jsx';

const className = `catalog__button`;
const name = `Show more`;

describe(`Button snapshot test`, () => {
  it(`Button should render button`, () => {
    const tree = renderer.create(
        <Button
          onClick={() => { }}
          className={className}
          name={name}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
