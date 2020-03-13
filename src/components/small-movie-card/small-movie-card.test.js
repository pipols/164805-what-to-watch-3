import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import SmallMovieCard from "./small-movie-card.jsx";

const mockStore = configureStore([]);
const setActiveFilm = () => {};
const onMovieHover = () => {};

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
};

describe(`<SmallMovieCard />`, () => {
  const store = mockStore({
    activeFilm: null
  });

  it(`рендер с video`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <SmallMovieCard
            movie={movie}
            onMovieHover={onMovieHover}
            setActiveFilm={setActiveFilm}
            isPlay={true}
          />
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`рендер с img`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <SmallMovieCard
            movie={movie}
            onMovieHover={onMovieHover}
            setActiveFilm={setActiveFilm}
            isPlay={false}
          />
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
