import MoviePlayerFullscreen from './movie-player-fullscreen.tsx';

const movie = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  thumbnail: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Comedies`,
  releaseDate: `2014`,
  promo: `promo`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewMp4: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewWebm: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`MoviePlayerFullscreen snapshot test`, () => {
  it(`MoviePlayerFullscreen should render fullscreen movie player`, () => {
    const tree = renderer.create(
        <MoviePlayerFullscreen
          setIsFullscreen={() => {}}
          movie={movie}
          isFullscreen={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
