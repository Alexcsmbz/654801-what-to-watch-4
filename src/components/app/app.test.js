import {App} from './app.jsx';
import {testMovie, testUser} from 'config';

jest.mock(`react-router-dom`, () => ({
  ...jest.requireActual(`react-router-dom`),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe(`App snapshot test`, () => {
  it(`App should render app component`, () => {
    const tree = renderer.create(
        <App
          promoMovie={testMovie}
          movies={[]}
          onFilterClick={() => {}}
          genres={[]}
          activeMovie={testMovie}
          setActiveMovie={() => {}}
          getMovies={() => {}}
          getAuthStatus={() => {}}
          auth={() => {}}
          isLoading={false}
          appErrors={[]}
          userErrors={[]}
          filteredMovies={[]}
          isAuth={true}
          user={testUser}
          sendReview={() => {}}
          toggleMovieInList={() => {}}
          addedMovies={[]}
          getFavoriteMovies={() => {}}
          getPromoMovie={() => {}}
          getCommentList={() => {}}
          commentList={[]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
