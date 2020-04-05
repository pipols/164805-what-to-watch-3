import React from "react";
import renderer from "react-test-renderer";
import {MovieCardButtons} from "./movie-card-buttons.jsx";
import {Router} from "react-router-dom";
import history from "../../history";

it(`<MovieCardButtons />`, () => {
  const tree = renderer
  .create(
      <Router history={history} >
        <MovieCardButtons
          filmId={1}
          isFavorite={true}
          isMainPage={true}
          onPostFavorite={() => {}}
        />
      </Router>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
