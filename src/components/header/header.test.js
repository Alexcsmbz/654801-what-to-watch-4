import Header from './header.tsx';
import {BrowserRouter as Router} from 'react-router-dom';

describe(`Header snapshot test`, () => {
  it(`Header should render header`, () => {
    const tree = renderer.create(
        <Router>
          <Header />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
