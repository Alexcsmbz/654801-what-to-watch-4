import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const movie = {
  name: `Film 1`,
  img: `img/img-1.jpg`,
};

describe(`MovieCard snapshot test`, () => {
  it(`MovieCard should render movie`, () => {
    const tree = renderer.create(
        <MovieCard
          movie={movie}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
