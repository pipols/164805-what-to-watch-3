import {extend} from './utils/utils';
import {filmsData} from './mocks/films';
//
const initialState = {
  films: filmsData,
  genre: `All genres`,
  genresFilter: `All genres`,
  activeFilm: null,
  shownCardsStack: 8 //
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  GET_FILMS: `GET_FILMS`,
  SET_GENRES_FILTER: `SET_GENRES_FILTER`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  ADD_CARDS_STACK: `ADD_CARDS_STACK`
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
//
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.SET_GENRES_FILTER:
      return extend(state, {
        genresFilter: action.payload
      });
    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload
      });
    case ActionType.ADD_CARDS_STACK:
      return extend(state, {
        shownCardsStack: state.shownCardsStack + 8
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
