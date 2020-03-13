import React from "react";
import {shallow} from "enzyme";
import {GenresList} from "./genres-list.jsx";

const DEFAULT_FILTER = `All genres`;
const onFilterClick = jest.fn();
const filters = [`Comedies`, `Crime`];


describe(`<GenresList/>`, () => {
  const wrapper = shallow(
      <GenresList
        filters={filters}
        onFilterClick={onFilterClick}
      />
  );
  const links = wrapper.find(`.catalog__genres-link`);

  links.forEach((link) => link.simulate(`click`, {
    preventDefault: () => {}
  }));

  it(`первый фильтр всегда All genres`, () => {
    expect(onFilterClick).toHaveBeenCalledTimes(links.length);
    expect(onFilterClick.mock.calls[0][0]).toBe(DEFAULT_FILTER);
  });

  it(`клик по фильтру возвращает название фильтра`, () => {
    expect(onFilterClick.mock.calls[1][0]).toBe(filters[1]);
    expect(onFilterClick.mock.calls[2][0]).toBe(filters[2]);
  });
});
