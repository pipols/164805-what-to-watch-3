import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const onMovieClick = () => {};
const onMovieHover = () => {};

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`
};

it(`<SmallMovieCard /> renders correctly`, () => {
  const tree = renderer
  .create(<SmallMovieCard
    movie={movie}
    onMovieClick={onMovieClick}
    onMovieHover={onMovieHover}
    isPlay={true}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
