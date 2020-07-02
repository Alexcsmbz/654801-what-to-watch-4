import GenreList from './genre-list.jsx';
import GenreListItem from 'components/genre-list-item/genre-list-item.jsx';

const genre = {
  name: `genre`
};

describe(`GenreList snapshot test`, () => {
  it(`GenreList should render genre list`, () => {
    const tree = renderer.create(
        <GenreList>
          <GenreListItem item={genre} />
          <GenreListItem item={genre} />
          <GenreListItem item={genre} />
        </GenreList>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
