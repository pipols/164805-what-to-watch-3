import React from "react";
import renderer from "react-test-renderer";
import App from "../app.jsx";

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

it(`<App /> renders correctly`, () => {
  const tree = renderer
  .create(<App
    promoMovieData={promoMovieData}
    filmsData={filmsData}
    onMovieTitleClick={onMovieTitleClick}/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
