import NavTabActive from './nav-tab-active.jsx';

const tab = {
  name: `Overview`,
};

describe(`NavTabActive snapshot test`, () => {
  it(`NavTabActive should render nav tab active`, () => {
    const tree = renderer.create(
        <NavTabActive
          onClick={() => {}}
          tab={tab}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
