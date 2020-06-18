import MovieCard from './movie-card.jsx';

const movieOnFocus = {
  name: `Film 1`,
  img: `img/img-1.jpg`,
};

const movie = {
  name: `Film 1`,
  img: `img/img-1.jpg`,
};

describe(`MovieCard e2e test`, () => {
  const onMouseEnter = jest.fn((...args) => [...args]);
  const onClick = jest.fn(() => {});

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
      />
  );

  const cardSelf = movieCard.find(`.small-movie-card`);

  it(`Movie should send in handler`, () => {
    cardSelf.simulate(`mouseenter`, movieOnFocus);
    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(movieOnFocus);
  });

  it(`Click should to be to title`, () => {
    cardSelf.simulate(`click`);
    expect(onClick.mock.calls.length).toBe(1);
  });
});
