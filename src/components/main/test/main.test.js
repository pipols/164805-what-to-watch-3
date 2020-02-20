import React from "react";
import renderer from "react-test-renderer";
import Main from "../main.jsx";

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const filmsData = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
}, {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`
}];

const onMovieTitleClick = () => {};

it(`<Main /> renders correctly`, () => {
  const tree = renderer.create(<Main
    promoMovieData={promoMovieData}
    filmsData={filmsData}
    onMovieTitleClick={onMovieTitleClick}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
