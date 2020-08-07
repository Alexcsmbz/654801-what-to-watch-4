import Subpages from './subpages';
import Overview from 'components/overview/overview';
import Details from 'components/details/details';
import Reviews from 'components/reviews/reviews';
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
