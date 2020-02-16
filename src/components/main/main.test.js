import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const MOVIE_TITLE = [`The Grand Budapest Hotel`];
const movieTitleClickHandler = () => {};

it(`<Main /> renders correctly`, () => {
  const tree = renderer.create(<Main
    promoMovieData={promoMovieData}
    moviesTitle={MOVIE_TITLE}
    movieTitleClickHandler={movieTitleClickHandler}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
