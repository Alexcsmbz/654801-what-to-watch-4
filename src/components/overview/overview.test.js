import Overview from './overview.jsx';
import {testMovie} from 'config';

describe(`Overview snapshot test`, () => {
  it(`Overview should render movie details`, () => {
    const tree = renderer.create(
        <Overview movie={testMovie} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
