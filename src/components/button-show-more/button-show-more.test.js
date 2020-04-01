import React from "react";
import renderer from "react-test-renderer";
import {ButtonShowMore} from "./button-show-more.jsx";

it(`<ButtonShowMore /> renders correctly`, () => {

  const tree = renderer
  .create(<ButtonShowMore onShowMoreClick={() => {}} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
