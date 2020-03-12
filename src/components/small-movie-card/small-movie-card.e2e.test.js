import React from "react";
import {shallow} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {SmallMovieCard} from "./small-movie-card.jsx";

const movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`
};
const mockStore = configureStore([]);
const setActiveFilm = jest.fn();
const onMovieHover = jest.fn();

describe(`<SmallMovieCard />`, () => {
  const store = mockStore({
    activeFilm: null
  });

  const wrapper = shallow(
      <Provider store={store} >
        <SmallMovieCard
          movie={movie}
          onMovieHover={onMovieHover}
          setActiveFilm={setActiveFilm}
          isPlay={true}
        />
      </Provider>
  );

  it(`при наведении на карточку, возвращает обьект с фильмом`, () => {
    wrapper.simulate(`mouseenter`);
    expect(onMovieHover).toHaveBeenCalledTimes(1);
    expect(onMovieHover.mock.calls[0][0]).toMatchObject(movie);
  });

  it(`при удалении с карточки, возвращает null`, () => {
    wrapper.simulate(`mouseleave`);
    expect(onMovieHover).toHaveBeenCalledTimes(2);
    expect(onMovieHover.mock.calls[1][0]).toBe(null);
  });

  it(`пропс isPlay=(true) отоброжает VideoPlayer вместо img`, () => {
    wrapper.setProps({isPlay: true});
    expect(wrapper.exists(`VideoPlayer`)).toBe(true);
    expect(wrapper.exists(`img`)).toBe(false);
  });

  it(`пропс isPlay=(false) отоброжает img вместо VideoPlayer`, () => {
    wrapper.setProps({isPlay: false});
    expect(wrapper.exists(`VideoPlayer`)).toBe(false);
    expect(wrapper.exists(`img`)).toBe(true);
  });
});
