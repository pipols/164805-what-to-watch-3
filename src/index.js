import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {filmsData} from "./mocks/films";
import film from "../../mocks/film";

const container = document.querySelector(`#root`);

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(<App promoMovieData={promoMovieData} filmsData={filmsData} film={film}/>, container);
