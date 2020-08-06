import Button from './button';

describe(`Button snapshot test`, () => {
  it(`Button should render button`, () => {
    const tree = renderer.create(
        <Button
          button={{
            name: `name`,
            onClick: () => {},
            className: `className`
          }}
          icon={{
            iconKey: `#icon-key`,
            width: `19`,
            height: `19`,
          }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
