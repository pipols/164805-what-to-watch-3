import React from "react";
import {shallow} from "enzyme";
import SmallMovieCard from "../small-movie-card.jsx";

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

const onMovieTitleClick = jest.fn();
const onMovieHover = jest.fn();

describe(`<SmallMovieCard />`, () => {
  const wrapper = shallow(<SmallMovieCard
    movie={movie}
    onMovieTitleClick={onMovieTitleClick}
    onMovieHover={onMovieHover}
  />);

  it(`onMouseOver`, () => {
    wrapper.simulate(`mouseover`);
    expect(onMovieHover).toHaveBeenCalledTimes(1);
    expect(onMovieHover.mock.calls[0][0]).toMatchObject(movie);
  });
});
