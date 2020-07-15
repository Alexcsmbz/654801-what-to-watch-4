import {useState} from 'react';

const withActiveMovie = (Component) => (props) => {
  const [activeMovie, setActiveMovie] = useState({});

  return (
    <Component
      {...props}
      activeMovie={activeMovie}
      setActiveMovie={setActiveMovie}
    />
  );
};

export default withActiveMovie;
