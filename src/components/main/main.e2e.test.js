import React from "react";
import {mount} from 'enzyme';
import Main from "./main.jsx";
import {e2eMock} from "./mock";

const {promoMovieData, MOVIES_TITLE} = e2eMock;
const movieTitleClickHandler = jest.fn();

it(`<Main/> --> cards title click`, () => {
  const wrapper = mount(
      <Main
        promoMovieData={promoMovieData}
        moviesTitle={MOVIES_TITLE}
        movieTitleClickHandler={movieTitleClickHandler}
      />);

  const titles = wrapper.find(`.small-movie-card__title`);

  titles.forEach((title) => title.simulate(`click`));
  expect(movieTitleClickHandler).toHaveBeenCalledTimes(titles.length);
});
