import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {ButtonShowMore} from "./button-show-more.jsx";

const mockStore = configureStore([]);
const onShowMoreClick = () => {};

it(`<Film /> renders correctly`, () => {
  const store = mockStore({
    shownCardsStack: 8
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <ButtonShowMore onShowMoreClick={onShowMoreClick} />
      </Provider>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
