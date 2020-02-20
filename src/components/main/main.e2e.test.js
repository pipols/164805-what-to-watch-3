import React from "react";
import {mount} from 'enzyme';
import Main from "./main.jsx";

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const filmsData = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
}, {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`
}];

const onMovieTitleClick = jest.fn();

it(`<Main /> --> cards title click`, () => {
  const wrapper = mount(
      <Main
        promoMovieData={promoMovieData}
        filmsData={filmsData}
        onMovieTitleClick={onMovieTitleClick}
      />);

  const titles = wrapper.find(`.small-movie-card__title`);

  titles.forEach((title) => title.simulate(`click`));
  expect(onMovieTitleClick).toHaveBeenCalledTimes(titles.length);
});
