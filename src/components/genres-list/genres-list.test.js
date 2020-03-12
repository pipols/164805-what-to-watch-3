import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";

const onFilterClick = () => {};
const filters = [`Comedies`, `Crime`];

it(`<GenresList/> renders`, () => {
  const tree = renderer
    .create(<GenresList
      filters={filters}
      onFilterClick={onFilterClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
