import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const container = document.querySelector(`#root`);

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(<App promoMovieData={promoMovieData}/>, container);
