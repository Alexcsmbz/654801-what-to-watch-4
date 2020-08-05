import GenreList from './genre-list.tsx';
import GenreListItem from 'components/genre-list-item/genre-list-item.tsx';

const genres = [
  `Comedy`,
  `Drama`,
  `Crime`,
];

describe(`GenreList snapshot test`, () => {
  it(`GenreList should render genre list`, () => {
    const tree = renderer.create(
        <GenreList>
          {genres.map((g) => <GenreListItem key={g} item={g} />)}
        </GenreList>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
