import Header from './header';
import {BrowserRouter as Router} from 'react-router-dom';
import {testUser} from 'config';

describe(`Header snapshot test`, () => {
  it(`Header should render header`, () => {
    const tree = renderer.create(
        <Router>
          <Header
            user={testUser}
            isAuth={true}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
