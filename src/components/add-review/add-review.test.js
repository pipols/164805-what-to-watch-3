import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review.jsx";
import {Router} from "react-router-dom";
import history from "../../history";

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

it(`<AddReview /> renders correctly`, () => {
  const tree = renderer
  .create(
      <Router history={history} >
        <AddReview
          film={film}
          onReviewSubmit={() => {}}
          onFieldChange={() => {}}
          isFormDisabled={true}
          isTextareaValid={true}
          rating={`2`}
          reviewText={`comment`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
