import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Film from "./film.jsx";

const mockStore = configureStore([]);

const film = {
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

const filmsData = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
}, {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
}];

it(`<Film /> renders correctly`, () => {
  const store = mockStore({
    films: filmsData,
    genresFilter: `All genres`,
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <Film film={film} />
      </Provider>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
