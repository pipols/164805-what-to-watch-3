import React from "react";
import {shallow} from "enzyme";
import {GenresList} from "./genres-list.jsx";

const DEFAULT_FILTER = `All genres`;
const onFilterClick = jest.fn();
const handlerItemClick = jest.fn();
const filters = [DEFAULT_FILTER, `Comedies`, `Crime`];


describe(`<GenresList/>`, () => {
  const wrapper = shallow(
      <GenresList
        filters={filters}
        onFilterClick={onFilterClick}
        handlerItemClick={handlerItemClick}
        activeItem={filters[0]}
      />
  );
  const links = wrapper.find(`.catalog__genres-link`);

  links.forEach((link) => link.simulate(`click`, {
    preventDefault: () => {}
  }));
  // хрень
  it(`первый фильтр всегда All genres`, () => {
    expect(onFilterClick).toHaveBeenCalledTimes(links.length);
    expect(onFilterClick.mock.calls[0][0]).toBe(DEFAULT_FILTER);
  });

  it(`при клике на фильтр, onFilterClick возврощает название фильтра`, () => {
    expect(onFilterClick.mock.calls[1][0]).toBe(filters[1]);
    expect(onFilterClick.mock.calls[2][0]).toBe(filters[2]);
  });

  it(`при клике на фильтр, handlerItemClick возврощает название фильтра`, () => {
    expect(handlerItemClick.mock.calls[0][0]).toBe(filters[0]);
    expect(handlerItemClick.mock.calls[1][0]).toBe(filters[1]);
  });
});
