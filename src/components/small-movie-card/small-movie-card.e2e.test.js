import React from "react";
import {shallow} from "enzyme";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

const onMovieClick = jest.fn();
const onMovieHover = jest.fn();

describe(`<SmallMovieCard />`, () => {
  const wrapper = shallow(<SmallMovieCard
    movie={movie}
    onMovieClick={onMovieClick}
    onMovieHover={onMovieHover}
  />);

  it(`mouseenter`, () => {
    wrapper.simulate(`mouseenter`);
    expect(onMovieHover).toHaveBeenCalledTimes(1);
    expect(onMovieHover.mock.calls[0][0]).toMatchObject(movie);
  });

  it(`mouseleave`, () => {
    wrapper.simulate(`mouseleave`);
    expect(onMovieHover).toHaveBeenCalledTimes(2);
    expect(onMovieHover.mock.calls[1][0]).toBe(null);
  });

  it(`onclick`, () => {
    wrapper.simulate(`click`);
    expect(onMovieClick).toHaveBeenCalledTimes(1);
    expect(onMovieClick.mock.calls[0][0]).toMatchObject(movie);
  });
});
