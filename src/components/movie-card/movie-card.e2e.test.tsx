import MovieCard from './movie-card';
import {testMovie} from 'config';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});

jest.mock(`react-router-dom`, () => ({
  ...jest.requireActual(`react-router-dom`),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe(`MovieCard e2e test`, () => {
  const onClick = jest.fn(() => {});

  const movieCard = Enzyme.shallow(
      <MovieCard
        movie={testMovie}
        onClick={onClick}
      />
  );

  const cardSelf = movieCard.find(`.small-movie-card`);

  it(`Click should to be to title`, () => {
    cardSelf.simulate(`click`);
    expect(onClick.mock.calls.length).toBe(1);
  });
});
