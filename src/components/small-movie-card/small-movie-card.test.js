import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const title = `Johnny English`;
const movieTitleClickHandler = () => {};

it(`<SmallMovieCard /> renders correctly`, () => {
  const tree = renderer
  .create(<SmallMovieCard
    title={title}
    movieTitleClickHandler={movieTitleClickHandler}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
