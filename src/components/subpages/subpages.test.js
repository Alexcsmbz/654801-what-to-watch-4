import Subpages from './subpages.jsx';
import Overview from 'components/overview/overview.jsx';
import Details from 'components/details/details.jsx';
import Reviews from 'components/reviews/reviews.jsx';
import {testMovie} from 'config';

describe(`Subpages snapshot test`, () => {
  it(`Subpages should render subpages`, () => {
    const tree = renderer.create(
        <Subpages idx={0}>
          <Overview movie={testMovie} />
          <Details movie={testMovie} />
          <Reviews commentList={[]} />
        </Subpages>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
