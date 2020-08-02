import {useState} from 'react';

const withReview = (Component) => (props) => {
  const {setState} = useState();
  const [review, setReview] = useState({
    raiting: 5,
    comment: ``,
  });

  return (
    <Component
      {...props}
      review={review}
      setReview={setReview}
    />
  );
};

export default withReview;
