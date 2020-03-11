import {extend} from './utils/utils';
import {filmsData} from './mocks/films';

const initialState = {
  films: filmsData,
  genre: `All genres`,
};
// изменение фильтра по жанрам и получение списка фильмов в соответствии выбранным жанром.
const ActionType = {
  SET_GENRE: `SET_GENRE`,
  GET_FILMS: `GET_FILMS`
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState}; //
