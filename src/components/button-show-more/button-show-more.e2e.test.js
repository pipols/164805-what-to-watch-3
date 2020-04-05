import React from "react";
import {shallow} from "enzyme";
import {ButtonShowMore} from "./button-show-more.jsx";

const onShowMoreClick = jest.fn();

it(`<ButtonShowMore /> onShowMoreClick`, () => {

  const wrapper = shallow(
      <ButtonShowMore
        onShowMoreClick={onShowMoreClick}
      />);

  wrapper.find(`button`).simulate(`click`);
  expect(onShowMoreClick).toHaveBeenCalledTimes(1);
});
