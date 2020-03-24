import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";

const onFilterClick = () => {};
const onItemClick = () => {};
const filters = [`Comedies`, `Crime`];

it(`<GenresList/> renders`, () => {
  const tree = renderer
    .create(<GenresList
      filters={filters}
      onFilterClick={onFilterClick}
      onItemClick={onItemClick}
      activeItem={filters[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
