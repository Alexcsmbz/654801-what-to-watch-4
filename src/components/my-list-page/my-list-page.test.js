import MyListPage from './my-list-page.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import {testUser, testMovie} from 'config';

describe(`MyListPage snapshot test`, () => {
  it(`MyListPage should render my movies list page`, () => {
    const tree = renderer.create(
        <Router>
          <MyListPage
            user={testUser}
            movies={[]}
            activeMovie={testMovie}
            onClick={() => {}}
            getFavoriteMovies={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
