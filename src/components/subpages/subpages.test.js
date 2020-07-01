import Subpages from './subpages.jsx';
import Overview from 'components/overview/overview.jsx';
import Details from 'components/details/details.jsx';
import Reviews from 'components/reviews/reviews.jsx';

const activeIdx = 0;

describe(`Subpages snapshot test`, () => {
  it(`Subpages should render subpages`, () => {
    const tree = renderer.create(
        <Subpages idx={activeIdx}>
          <Overview />
          <Details />
          <Reviews />
        </Subpages>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
