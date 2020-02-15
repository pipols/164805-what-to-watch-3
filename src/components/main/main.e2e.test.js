import React from "react";
import {mount} from 'enzyme';
import MainComponent from "./main.jsx";
import {promoMovieData, MOVIES_TITLE} from "./mock";

const mainTitleClickHandler = jest.fn();

it(`<MainComponent/> --> cards title click`, () => {
  const wrapper = mount(
      <MainComponent
        promoMovieData={promoMovieData}
        moviesTitle={MOVIES_TITLE}
        mainTitleClickHandler={mainTitleClickHandler}
      />);

  const titles = wrapper.find(`.small-movie-card__title`);

  titles.forEach((title) => title.simulate(`click`));
  expect(mainTitleClickHandler.mock.calls.length).toBe(titles.length);
});
