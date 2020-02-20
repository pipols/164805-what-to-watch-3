import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const onMovieTitleClick = () => {};
const onMovieHover = () => {};

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`<SmallMovieCard /> renders correctly`, () => {
  const tree = renderer
  .create(<SmallMovieCard
    movie={movie}
    onMovieTitleClick={onMovieTitleClick}
    onMovieHover={onMovieHover}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
