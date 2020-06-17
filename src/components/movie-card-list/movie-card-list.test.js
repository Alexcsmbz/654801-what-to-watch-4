import MovieCardList from './movie-card-list.jsx';

const films = [
  {
    name: `Film 1`,
    img: `img/img-1.jpg`,
  },
  {
    name: `Film 2`,
    img: `img/img-2.jpg`,
  },
  {
    name: `Film 3`,
    img: `img/img-3.jpg`,
  },
  {
    name: `Film 4`,
    img: `img/img-4.jpg`,
  },
];

describe(`MovieCardList snapshot test`, () => {
  it(`MovieCardList should render movie list`, () => {
    const tree = renderer.create(
        <MovieCardList
          films={films}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
