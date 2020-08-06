import NavTab from './nav-tab';

const tab = {
  name: `tab`
};

describe(`NavTab snapshot test`, () => {
  it(`NavTab should render nav tab`, () => {
    const tree = renderer.create(
        <NavTab
          tab={tab}
          onClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
