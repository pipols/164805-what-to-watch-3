import React from "react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
  posterImage: `bg-the-grand-budapest-hotel.jpg`,
};

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

jest.mock(`../header/header.jsx`, () => `Header`);

it(`<Main /> renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: [],
      promoMovie: {},
      comments: []
    },
    [NameSpace.STATE]: {
      genre: `All genres`,
      activeFilm: null,
      shownCardsStack: 8,
      isActivePlayer: false,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          promoMovieData={promoMovieData}
          isShowButton={true}
          onPlayClick={() => {}}
          films={[film, film]}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
