import React from "react";
import {mount} from "enzyme";
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

const onMovieClick = jest.fn();

describe(`<Main />`, () => {
  const wrapper = mount(
      <Main
        promoMovieData={promoMovieData}
        filmsData={filmsData}
        onMovieClick={onMovieClick}
      />);
  const cards = wrapper.find(`.small-movie-card`);

  it(`cards click`, () => {
    cards.forEach((card) => card.simulate(`click`));
    expect(onMovieClick).toHaveBeenCalledTimes(cards.length);
    expect(onMovieClick.mock.calls[0][0]).toMatchObject(filmsData[0]);
    expect(onMovieClick.mock.calls[1][0]).toMatchObject(filmsData[1]);
  });

});
