import PrivateRoute from './private-route';
import {BrowserRouter as Router} from 'react-router-dom';

describe(`PrivateRoute snapshot test`, () => {
  it(`PrivateRoute should render private route component`, () => {
    const tree = renderer.create(
        <Router>
          <PrivateRoute isAuth={false} />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
