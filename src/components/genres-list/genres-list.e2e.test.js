import React from "react";
import {shallow} from "enzyme";
import {GenresList} from "./genres-list.jsx";

const onFilterClick = jest.fn();

const DEFAULT_FILTER = `All genres`;
const Filter = {
  COMEDIES: `Comedies`,
  DRAMAS: `Dramas`
};

const films = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
},
{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`,
  genre: `Drama`
}];

it(`<GenresList/> return click filter`, () => {
  const wrapper = shallow(
      <GenresList
        films={films}
        onFilterClick={onFilterClick}
      />
  );
  const links = wrapper.find(`.catalog__genres-link`);

  links.forEach((link) => link.simulate(`click`, {
    preventDefault: () => {}
  }));

  expect(onFilterClick).toHaveBeenCalledTimes(links.length);
  expect(onFilterClick.mock.calls[0][0]).toBe(DEFAULT_FILTER);
  expect(onFilterClick.mock.calls[1][0]).toBe(Filter.COMEDIES);
  expect(onFilterClick.mock.calls[2][0]).toBe(Filter.DRAMAS);
});
