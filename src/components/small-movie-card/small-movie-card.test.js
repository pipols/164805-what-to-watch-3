import React from "react";
import renderer from "react-test-renderer";
import smallMovieCard from "./small-movie-card.jsx";

const title = `Johnny English`;

it(`<smallMovieCard /> renders correctly`, () => {
  const tree = renderer
  .create(<smallMovieCard title={title}/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
