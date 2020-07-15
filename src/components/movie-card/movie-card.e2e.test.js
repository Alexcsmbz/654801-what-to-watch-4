import MovieCard from './movie-card.jsx';

const movie = {
  name: `movie 1`,
  img: `img/img-1.jpg`,
};

describe(`MovieCard e2e test`, () => {
  const onClick = jest.fn(() => {});

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onClick={onClick}
      />
  );

  const cardSelf = movieCard.find(`.small-movie-card`);

  it(`Click should to be to title`, () => {
    cardSelf.simulate(`click`);
    expect(onClick.mock.calls.length).toBe(1);
  });
});
