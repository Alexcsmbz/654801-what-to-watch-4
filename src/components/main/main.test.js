import Main from './main.tsx';
import {BrowserRouter as Router} from 'react-router-dom';
import {testMovie, testUser} from 'config';

describe(`Main snapshot test`, () => {
  it(`Main should render main page`, () => {
    const tree = renderer.create(
        <Router>
          <Main
            toggleMovieInList={() => {}}
            promoMovie={testMovie}
            addedMovies={[]}
            movies={[]}
            genres={[]}
            onMovieCardClick={() => {}}
            onFilterClick={() => {}}
            isLoading={false}
            isAuth={true}
            user={testUser}
            moviesAmount={8}
            activeIdx={0}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
