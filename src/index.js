import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app.jsx';

const data = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  reliseDate: `2014`,
};

const init = () => {
  ReactDOM.render(
      <App
        name={data.name}
        genre={data.genre}
        reliseDate={data.reliseDate}
      />,
      document.querySelector(`#root`)
  );
};

init();
