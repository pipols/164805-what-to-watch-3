import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";

const onFilterClick = () => {};

const films = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
}];

it(`<GenresList/> renders`, () => {
  const tree = renderer
    .create(<GenresList
      films={films}
      onFilterClick={onFilterClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
