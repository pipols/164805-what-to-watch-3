import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  votes: `8,9`,
  userName: `Kate Muir`,
  reviewDate: `December 24, 2016`
};

it(`<Review /> renders correctly`, () => {
  const tree = renderer.create(<Review
    review={review}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
