import Details from './details.tsx';
import {testMovie} from 'config';

describe(`Details snapshot test`, () => {
  it(`Details should render movie details`, () => {
    const tree = renderer.create(
        <Details movie={testMovie} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
