import GenreListItem from './genre-list-item.tsx';

const genre = `genre`;

describe(`GenreListItem snapshot test`, () => {
  it(`GenreListItem should render genre`, () => {
    const tree = renderer.create(
        <GenreListItem
          item={genre}
          onClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
