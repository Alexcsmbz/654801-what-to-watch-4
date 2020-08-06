import Main from './main';
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
            isAuth={true}
            user={testUser}
            moviesAmount={8}
            activeIdx={0}
            isFullscreen={false}
            setActiveIdx={() => {}}
            setMoviesAmount={() => {}}
            setIsFullscreen={() => {}}
            openFullscreen={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
