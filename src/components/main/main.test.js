import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const MOVIE_TITLE = [`The Grand Budapest Hotel`];
const mainTitleClickHandler = () => {};

it(`<Main /> renders correctly`, () => {
  const tree = renderer.create(<Main
    promoMovieData={promoMovieData}
    moviesTitle={MOVIE_TITLE}
    mainTitleClickHandler={mainTitleClickHandler}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
