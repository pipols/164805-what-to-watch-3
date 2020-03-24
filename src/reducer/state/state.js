import {extend} from "../../utils/utils";
import {CardCount} from "../../const/common";

const initialState = {
  genre: `All genres`,
  activeFilm: null,
  shownCardsStack: CardCount.INITIAL,
  isActivePlayer: false,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  GET_FILMS: `GET_FILMS`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  ADD_CARDS_STACK: `ADD_CARDS_STACK`,
  SET_ACTIVE_PLAYER: `SET_ACTIVE_PLAYER`,
  RESET_STACK: `RESET_STACK`
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
  setActiveFilm: (film) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: film
  }),
  addCardsStack: () => ({
    type: ActionType.ADD_CARDS_STACK
  }),
  setActivePlayer: (bool) => ({
    type: ActionType.SET_ACTIVE_PLAYER,
    payload: bool
  }),
  resetStack: () => ({
    type: ActionType.RESET_STACK
  })
};

//
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload
      });
    case ActionType.ADD_CARDS_STACK:
      return extend(state, {
        shownCardsStack: state.shownCardsStack + CardCount.ADD
      });
    case ActionType.SET_ACTIVE_PLAYER:
      return extend(state, {
        isActivePlayer: action.payload
      });
    case ActionType.RESET_STACK:
      return extend(state, {
        shownCardsStack: CardCount.INITIAL
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState};
