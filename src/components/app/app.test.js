import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const MOVIE_TITLES = [`The Grand Budapest Hotel`];

it(`<App /> renders correctly`, () => {
  const tree = renderer
  .create(<App promoMovieData={promoMovieData} moviesTitle={MOVIE_TITLES} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
