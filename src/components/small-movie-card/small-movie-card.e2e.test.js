import React from "react";
import {shallow} from "enzyme";
import {SmallMovieCard} from "./small-movie-card.jsx";

const film = {
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  poster: `bg-the-grand-budapest-hotel.jpg`,
  cover: `the-grand-budapest-hotel-poster.jpg`,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  actors: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`,
    `Saoirse Ronan`,
    `Tony Revoloru`,
    `Tilda Swinton`,
    `Tom Wilkinson`,
    `Owen Wilkinson`,
    `Adrien Brody`,
    `Ralph Fiennes`,
    `Jeff Goldblum`
  ],
  producer: `Wes Andreson`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.\n
    Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  rating: `8,9`,
  ratingDescription: `Very good`,
  votes: 240,
  duration: `1h 39m`,
  reviews: [
    {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      votes: `8,9`,
      userName: `Kate Muir`,
      reviewDate: `December 24, 2016`
    }
  ]
};

const setActiveFilm = jest.fn();
const handlerItemClick = jest.fn();

describe(`<SmallMovieCard />`, () => {

  const wrapper = shallow(
      <SmallMovieCard
        film={film}
        setActiveFilm={setActiveFilm}
        handlerItemClick={handlerItemClick}
        isPlay={true}
      />
  );

  it(`при наведении на карточку, возвращает обьект с фильмом`, () => {
    jest.useFakeTimers();
    wrapper.simulate(`mouseenter`);
    jest.runAllTimers();
    expect(handlerItemClick).toHaveBeenCalledTimes(1);
    expect(handlerItemClick.mock.calls[0][0]).toMatchObject(film);
  });

  it(`при удалении с карточки, возвращает null`, () => {
    wrapper.simulate(`mouseleave`);
    expect(handlerItemClick).toHaveBeenCalledTimes(2);
    expect(handlerItemClick.mock.calls[1][0]).toBe(null);
  });

  it(`клик на карточку, возвращает обьект с фильмом`, () => {
    wrapper.simulate(`click`);
    expect(setActiveFilm).toHaveBeenCalledTimes(1);
    expect(setActiveFilm.mock.calls[0][0]).toMatchObject(film);
  });

  it(`пропс isPlay=(true) отоброжает VideoPlayer вместо img`, () => {
    wrapper.setProps({isPlay: true});
    expect(wrapper.exists(`video`)).toBe(true);
    expect(wrapper.exists(`img`)).toBe(false);
  });

  it(`пропс isPlay=(false) отоброжает img вместо VideoPlayer`, () => {
    wrapper.setProps({isPlay: false});
    expect(wrapper.exists(`video`)).toBe(false);
    expect(wrapper.exists(`img`)).toBe(true);
  });
});
