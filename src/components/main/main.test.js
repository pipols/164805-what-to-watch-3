import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const filmsData = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`
}, {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
  preview: `test.ru`
}];

const onMovieClick = () => {};

it(`<Main /> renders correctly`, () => {
  const tree = renderer.create(<Main
    promoMovieData={promoMovieData}
    filmsData={filmsData}
    onMovieClick={onMovieClick}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
