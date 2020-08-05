import Footer from './footer.tsx';
import {BrowserRouter as Router} from 'react-router-dom';

describe(`Footer snapshot test`, () => {
  it(`Footer should render footer`, () => {
    const tree = renderer.create(
        <Router>
          <Footer />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
