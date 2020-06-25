import MoviePlayer from './movie-player.jsx';

const movie = {
  name: `name`,
  thumbnail: `thumbnail`,
  genre: `genre`,
  releaseDate: `releaseDate`,
  promo: `promo`,
  poster: `poster`,
  previewMp4: `previewMp4`,
  previewWebm: `previewWebm`
};

describe(`MoviePlayer e2e test`, () => {
  const onMouseEnter = jest.fn(() => true);
  const onMouseLeave = jest.fn(() => false);

  const onClick = jest.fn(() => {});

  const moviePlayer = shallow(
      <MoviePlayer
        movie={movie}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
  );

  const video = moviePlayer.find(`.movie-player`);

  it(`MoviePlayer should have play state`, () => {
    video.simulate(`click`);
    expect(onClick.mock.calls.length).toBe(1);
  });

//   it(`MoviePlayer should have pause state`, () => {
//     cardSelf.simulate(`click`);
//     expect(onClick.mock.calls.length).toBe(1);
//   });
});
