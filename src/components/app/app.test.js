import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";

const mockStore = configureStore([]);

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const filmsData = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
}, {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
}];

const onMovieClick = () => {};

it(`<App /> renders correctly`, () => {
  const store = mockStore({
    films: filmsData,
    genre: `All genres`,
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <App
          promoMovieData={promoMovieData}
          filmsData={filmsData}
          onMovieClick={onMovieClick}/>
      </Provider>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
