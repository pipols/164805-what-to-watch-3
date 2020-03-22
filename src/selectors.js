import {createSelector} from "reselect";

const getFilms = (state) => state.films;
const getGenre = (state) => state.genre;
const getActiveFilm = (state) => state.activeFilm;
const getShownCardsStack = (state) => state.shownCardsStack;
const getIsActivePlayer = (state) => state.isActivePlayer;
