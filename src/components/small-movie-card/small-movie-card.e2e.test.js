import React from "react";
import {shallow} from "enzyme";
import {SmallMovieCard} from "./small-movie-card.jsx";

const film = {
  title: `The Grand Budapest Hotel`,
  cover: `the-grand-budapest-hotel-poster.jpg`,
  previewImage: `the-grand-budapest-hotel-poster.jpg`,
  poster: `bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#fff`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H.`,
  rating: 8.9,
  votes: 240,
  producer: `Wes Andreson`,
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
  duration: 120,
  genre: `Drama`,
  year: 2014,
  id: 1,
  isFavorite: true,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const setActiveGenre = jest.fn();
const onItemClick = jest.fn();

describe(`<SmallMovieCard />`, () => {

  const wrapper = shallow(
      <SmallMovieCard
        film={film}
        setActiveGenre={setActiveGenre}
        onItemClick={onItemClick}
        isPlay={true}
      />
  );

  it(`при наведении на карточку, возвращает обьект с фильмом`, () => {
    jest.useFakeTimers();
    wrapper.simulate(`mouseenter`);
    jest.runAllTimers();
    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick.mock.calls[0][0]).toMatchObject(film);
  });

  it(`при удалении с карточки, возвращает null`, () => {
    wrapper.simulate(`mouseleave`);
    expect(onItemClick).toHaveBeenCalledTimes(2);
    expect(onItemClick.mock.calls[1][0]).toBe(null);
  });

  it(`клик на карточку, возвращает обьект с фильмом`, () => {
    wrapper.simulate(`click`);
    expect(setActiveGenre).toHaveBeenCalledTimes(1);
    expect(setActiveGenre.mock.calls[0][0]).toMatchObject(film);
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
