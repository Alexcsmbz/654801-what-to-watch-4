import GenreListItem from './genre-list-item.jsx';

const genre = {
  name: `genre`
};

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
