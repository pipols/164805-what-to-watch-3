import {createSelector} from "reselect";
import {getFilters} from "./utils/utils";

const getFilms = (state) => state.films;
const getGenre = (state) => state.genre;
const getActiveFilm = (state) => state.activeFilm;
const getIsActivePlayer = (state) => state.isActivePlayer;
const getShownCardsStack = (state) => state.shownCardsStack;

const getFiltersSelector = createSelector(getFilms, (films) => getFilters(films));
const getIsShowButtonSelector = createSelector(getShownCardsStack, getFilms, (stack, films) => stack < films.length);

export {getFiltersSelector, getFilms, getGenre, getActiveFilm, getIsActivePlayer, getShownCardsStack, getIsShowButtonSelector};
