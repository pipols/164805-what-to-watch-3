import React from "react";
import {shallow} from "enzyme";
import {MovieCardButtons} from "./movie-card-buttons.jsx";

const onPostFavorite = jest.fn();

describe(`<MovieCardButtons />`, () => {
  const wrapper = shallow(
      <MovieCardButtons
        filmId={1}
        isFavorite={true}
        isMainPage={true}
        onPostFavorite={onPostFavorite}
        isUserAuth={true}
      />
  );

  it(`onPostFavorite вернет film.id, isFavorite`, () => {
    wrapper.find(`.btn--list`).simulate(`click`);
    expect(onPostFavorite.mock.calls[0][0]).toBe(1, true);
  });
});
