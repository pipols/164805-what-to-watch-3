import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  id: 1,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  rating: 8.2,
  user: {
    id: 1,
    name: `user name`
  },
  date: `2020-03-07T12:35:45.538Z`
};

it(`<Review /> renders correctly`, () => {
  const tree = renderer.create(<Review
    review={review}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
