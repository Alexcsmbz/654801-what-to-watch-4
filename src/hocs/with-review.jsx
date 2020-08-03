import {useState} from 'react';

const withReview = (Component) => (props) => {
  const {setState} = useState();
  const [review, setReview] = useState({
    rating: 5,
    comment: ``,
    movieId: 0,
  });

  return <Component
    {...props}
    review={review}
    setReview={setReview}
  />;
};

export default withReview;
