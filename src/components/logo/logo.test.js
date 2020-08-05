import {BrowserRouter as Router} from 'react-router-dom';
import Logo from './logo.tsx';

describe(`Logo snapshot test`, () => {
  it(`Logo should render logo`, () => {
    const tree = renderer.create(
        <Router>
          <Logo className="className" />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
