import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieCard e2e test`, () => {
  it(`Movie should send in hanler`, () => {
    const onMouseEnter = jest.fn((...args) => [...args]);
    const movieOnFocus = {
      name: `Film 1`,
      img: `img/img-1.jpg`,
    };

    const movie = {
      name: `Film 1`,
      img: `img/img-1.jpg`,
    };

    const movieCard = shallow(
        <MovieCard
          movie={movie}
          onMouseEnter={onMouseEnter}
        />
    );

    const cardSelf = movieCard.find(`.small-movie-card`);
    cardSelf.simulate(`mouseenter`, movieOnFocus);
    expect(onMouseEnter.mock.calls[0][0]).toMatchObject(movieOnFocus);
  });
});
