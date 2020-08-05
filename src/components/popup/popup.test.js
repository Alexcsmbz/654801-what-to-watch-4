import Popup from './popup.tsx';

describe(`Popup snapshot test`, () => {
  it(`Popup should render popup`, () => {
    const tree = renderer.create(
        <Popup message={`message`} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
