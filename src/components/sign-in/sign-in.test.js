import SignIn from './sign-in.tsx';
import {BrowserRouter as Router} from 'react-router-dom';

jest.mock(`react-router-dom`, () => ({
  ...jest.requireActual(`react-router-dom`),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe(`SignIn snapshot test`, () => {
  it(`SignIn should render sign-in page`, () => {
    const tree = renderer.create(
        <Router>
          <SignIn
            message={``}
            isAuth={false}
            onSignIn={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
