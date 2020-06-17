import Main from 'components/main/main.jsx';

const App = (props) => {
  const {name, genre, reliseDate, films} = props;

  return <Main
    name={name}
    genre={genre}
    reliseDate={reliseDate}
    films={films}
  />;
};

App.propTypes = {
  name: propTypes.string.isRequired,
  genre: propTypes.string.isRequired,
  reliseDate: propTypes.string.isRequired,
  films: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    img: propTypes.string,
  })).isRequired,
};

export default App;
