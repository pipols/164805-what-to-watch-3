import React from "react";
import renderer from "react-test-renderer";
import {Reviews} from "./reviews.jsx";

const reviews = [{
  id: 1,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  rating: 3.4,
  user: {
    id: 1,
    name: `user name`
  },
  date: `2020-03-07T12:35:45.538Z`
},
{
  id: 2,
  comment: `Discerning travns will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  rating: 3.4,
  user: {
    id: 1,
    name: `user name`
  },
  date: `2020-03-07T12:35:45.538Z`
}];

it(`<Reviews /> renders correctly`, () => {
  const tree = renderer.create(<Reviews
    reviews={reviews}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
