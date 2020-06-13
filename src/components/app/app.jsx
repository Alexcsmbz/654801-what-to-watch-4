import React from 'react';
import Main from 'components/main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {name, genre, reliseDate, films} = props;
  const onClick = () => {};

  return <Main
    name={name}
    genre={genre}
    reliseDate={reliseDate}
    films={films}
    onClick={onClick}
  />;
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  reliseDate: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
  })).isRequired,
};

export default App;
