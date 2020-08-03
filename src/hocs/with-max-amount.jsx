import {useState} from 'react';

const withMaxAmount = (Component) => (props) => {
  const DEFAULT_MOVIES_AMOUNT = 8;

  const [moviesAmount, setMoviesAmount] = useState(DEFAULT_MOVIES_AMOUNT);

  return <Component
    {...props}
    moviesAmount={moviesAmount}
    setMoviesAmount={setMoviesAmount}
  />;
};

export default withMaxAmount;
