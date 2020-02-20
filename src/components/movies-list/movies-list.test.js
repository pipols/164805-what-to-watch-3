import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const filmsData = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
}];

const onMovieTitleClick = () => {};
const onMovieHover = () => {};

it(`<MoviesList /> renders correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      filmsData={filmsData}
      onMovieTitleClick={onMovieTitleClick}
      onMovieHover={onMovieHover}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
