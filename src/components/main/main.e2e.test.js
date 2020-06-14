import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`Main e2e test`, () => {
  it(`Click should be 1 time`, () => {
    const onClick = jest.fn();
    const main = shallow(
        <Main
          name={name}
          genre={genre}
          reliseDate={reliseDate}
          films={films}
          onClick={onClick}
        />
    );
    const title = main.find(`.small-movie-card__title`).at(1);
    title.props().onClick();

    expect(onClick.mock.calls.length).toBe(1);
  });
});
