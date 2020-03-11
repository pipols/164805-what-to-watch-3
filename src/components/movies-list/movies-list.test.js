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

const onMovieClick = () => {};
const GENRE = `Comedies`;

it(`<MoviesList /> renders correctly`, () => {
  const store = mockStore({
    films: filmsData,
    genre: `All genres`,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviesList
            films={filmsData}
            onMovieClick={onMovieClick}
            genre={GENRE}
          />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
