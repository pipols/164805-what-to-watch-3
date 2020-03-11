import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";

it(`<Logo /> renders header`, () => {
  const tree = renderer
  .create(<Logo />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
