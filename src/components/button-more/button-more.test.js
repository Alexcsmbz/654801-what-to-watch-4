import ButtonMore from './button-more.jsx';

const className = `catalog__button`;
const name = `Show more`;

describe(`ButtonMore snapshot test`, () => {
  it(`ButtonMore should render button`, () => {
    const tree = renderer.create(
        <ButtonMore
          onClick={() => { }}
          className={className}
          name={name}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
