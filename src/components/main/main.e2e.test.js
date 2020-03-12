import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main.jsx";

const mockStore = configureStore([]);

const promoMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const filmsData = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
}, {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
  preview: `test.ru`,
  genre: `Comedy`
}];

const onMovieClick = jest.fn();

describe(`<Main />`, () => {
  const store = mockStore({
    films: filmsData,
    genre: `All genres`,
  });

  const wrapper = mount(
      <Provider store={store}>
        <Main
          promoMovieData={promoMovieData}
          filmsData={filmsData}
          onMovieClick={onMovieClick}
        />
      </Provider>);
  const cards = wrapper.find(`.small-movie-card`);

  it(`клик по карточке возвращает обьект с фильмом`, () => {
    cards.forEach((card) => card.simulate(`click`));
    expect(onMovieClick).toHaveBeenCalledTimes(cards.length);
    expect(onMovieClick.mock.calls[0][0]).toMatchObject(filmsData[0]);
    expect(onMovieClick.mock.calls[1][0]).toMatchObject(filmsData[1]);
  });

});
