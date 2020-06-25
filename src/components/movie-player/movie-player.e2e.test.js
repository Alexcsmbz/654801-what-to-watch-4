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
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn(() => false);

  const onClick = jest.fn(() => {});

  const moviePlayer = mount(
      <MoviePlayer
        movie={movie}
      />
  );

  const instance = moviePlayer.instance();

  const video = moviePlayer.find(`.movie-player`);

  it(`MoviePlayer should have play state`, () => {
    // instance.onClick();
    video.find(`.movie-player`).simulate(`mouseenter`);
    expect(onMouseEnter.mock.calls.length).toBe(1);
  });

//   it(`MoviePlayer should have pause state`, () => {
//     cardSelf.simulate(`click`);
//     expect(onClick.mock.calls.length).toBe(1);
//   });
});
