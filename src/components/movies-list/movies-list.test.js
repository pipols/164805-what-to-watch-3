import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MoviesList} from "./movies-list.jsx";

const mockStore = configureStore([]);

const filmsData = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
}];

it(`<MoviesList /> renders correctly`, () => {
  const store = mockStore({
    films: filmsData,
    genre: `All genres`,
    genresFilter: `All genres`,
    activeFilm: null
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviesList films={filmsData} />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
