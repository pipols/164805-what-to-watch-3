import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item.jsx";

it(`<withActiveItem /> renders correctly`, () => {
  const MockComponent = () => <div />;
  const MockComponentWrapped = withActiveItem(MockComponent);
  const tree = renderer.create(<MockComponentWrapped
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
