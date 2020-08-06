import GenreListItemActive from './genre-list-item-active';

describe(`GenreListItemActive snapshot test`, () => {
  it(`GenreListItemActive should render genre active`, () => {
    const tree = renderer.create(
        <GenreListItemActive
          item={`genre`}
          onClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
