import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";

const mockStore = configureStore([]);

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

it(`<App /> renders correctly`, () => {
  const store = mockStore({
    activeFilm: null
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <App
          promoMovieData={promoMovieData}
        />
      </Provider>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
