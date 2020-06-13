import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const name = `Whatever film`;
const genre = `Criminal`;
const reliseDate = `1999`;
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

describe(`Main snapshot test`, () => {
  it(`Main should render films name, genre, relise date, films list`, () => {
    const tree = renderer.create(
        <Main
          name={name}
          genre={genre}
          reliseDate={reliseDate}
          films={films}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
