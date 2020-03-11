import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {filmsData} from "./mocks/films";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

const container = document.querySelector(`#root`);

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <Provider store={store}>
      <App promoMovieData={promoMovieData} filmsData={filmsData}/>,
    </Provider>,
    container
);
