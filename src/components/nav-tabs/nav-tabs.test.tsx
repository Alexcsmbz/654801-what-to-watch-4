import NavTabs from './nav-tabs';
import NavTab from 'components/nav-tab/nav-tab.tsx';

const tab = {
  name: `Overview`,
  isActive: true,
  idx: 0,
};

describe(`NavTabs snapshot test`, () => {
  it(`NavTabs should render nav tabs`, () => {
    const tree = renderer.create(
        <NavTabs>
          <NavTab
            onClick={() => {}}
            tab={tab}
          />
          <NavTab
            onClick={() => {}}
            tab={tab}
          />
          <NavTab
            onClick={() => {}}
            tab={tab}
          />
        </NavTabs>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
