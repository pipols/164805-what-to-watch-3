import React from "react";
import {shallow} from "enzyme";
import withActiveItem from "./with-active-item.jsx";

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should set active item`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().activeItem).toEqual(null);

  wrapper.props().onItemClick(`text`);
  expect(wrapper.props().activeItem).toEqual(`text`);

  wrapper.props().onItemClick({film: `film`});
  expect(wrapper.props().activeItem).toEqual({film: `film`});
});
