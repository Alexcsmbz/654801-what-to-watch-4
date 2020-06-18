import ReactDOM from 'react-dom';
import App from 'components/app/app.jsx';
import films from 'mock/films.js';

const data = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

ReactDOM.render(
    <App
      name={data.name}
      genre={data.genre}
      releaseDate={data.releaseDate}
      films={films}
    />,
    document.querySelector(`#root`)
);
