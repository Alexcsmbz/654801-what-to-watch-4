import AddReviewPage from './add-review-page';
import {testMovie, testUser, testComment} from 'config';
import {BrowserRouter as Router} from 'react-router-dom';

jest.mock(`react-router-dom`, () => ({
  ...jest.requireActual(`react-router-dom`),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe(`App snapshot test`, () => {
  it(`App should render app component`, () => {
    const tree = renderer.create(
        <Router>
          <AddReviewPage
            user={testUser}
            movie={testMovie}
            sendReview={() => { }}
            setReview={() => { }}
            review={testComment}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
