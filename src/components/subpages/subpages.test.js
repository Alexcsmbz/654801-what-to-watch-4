import Subpages from './subpages.tsx';
import Overview from 'components/overview/overview.tsx';
import Details from 'components/details/details.tsx';
import Reviews from 'components/reviews/reviews.tsx';
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
