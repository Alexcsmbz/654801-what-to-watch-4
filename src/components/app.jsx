import React from 'react';
import Main from 'components/main.jsx';

const App = (props) => {
  /* eslint-disable react/prop-types */
  const {name, genre, reliseDate} = props;
  return <Main
    name={name}
    genre={genre}
    reliseDate={reliseDate}
  />;
};

export default App;
