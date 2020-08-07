import {BrowserRouter as Router} from 'react-router-dom';
import MoviePage from './movie-page';
import {testMovie, testUser} from 'config';

describe(`MoviePage snapshot test`, () => {
  it(`MoviePage should render movie page`, () => {
    const tree = renderer.create(
        <Router>
          <MoviePage
            movies={[]}
            onMovieCardClick={() => {}}
            activeIdx={0}
            setActiveIdx={() => {}}
            isFullscreen={false}
            setIsFullscreen={() => {}}
            movie={testMovie}
            openFullscreen={() => {}}
            isAuth={true}
            user={testUser}
            toggleMovieInList={() => {}}
            addedMovies={[]}
            getCommentList={() => {}}
            commentList={[]}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
