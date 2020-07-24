import {App} from './app.jsx';


const name = `Whatever movie`;
const genre = `Criminal`;
const releaseDate = `1999`;
const movies = [
  {
    name: `movie 1`,
    img: `img/img-1.jpg`,
  },
  {
    name: `movie 2`,
    img: `img/img-2.jpg`,
  },
  {
    name: `movie 3`,
    img: `img/img-3.jpg`,
  },
  {
    name: `movie 4`,
    img: `img/img-4.jpg`,
  },
];

const genres = [
  `Comedy`,
  `Drama`,
  `Crime`,
];

describe(`App snapshot test`, () => {
  it(`App should render Main component with movies name, genre, relise date, movies list`, () => {
    const tree = renderer.create(
        <App
          name={name}
          genre={genre}
          releaseDate={releaseDate}
          movies={movies}
          genres={genres}
          activeMovie={{}}
          setActiveMovie={() => {}}
          errors={[]}
          isLoading={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
