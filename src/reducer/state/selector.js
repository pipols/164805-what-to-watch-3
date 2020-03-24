import {createSelector} from "reselect";
import {getFilters, getfilmsByGenre} from "../../utils/utils";
import NameSpace from "../name-space";
import {getFilms} from "../data/selector";

const NAME_SPACE = NameSpace.STATE;

export const getGenre = (state) => state[NAME_SPACE].genre;
export const getActiveFilm = (state) => state[NAME_SPACE].activeFilm;
export const getIsActivePlayer = (state) => state[NAME_SPACE].isActivePlayer;
export const getShownCardsStack = (state) => state[NAME_SPACE].shownCardsStack;

export const getFiltersSelector = createSelector(getFilms, (films) => getFilters(films));
export const getfilmsByGenreSelector = createSelector(getFilms, getGenre, (films, genre) => getfilmsByGenre(films, genre));

export const getShownFilmsSelector = createSelector(getFilms, getGenre, getShownCardsStack, (films, genre, stack) => getfilmsByGenre(films, genre).slice(0, stack));
export const getIsShowButtonSelector = createSelector(getShownCardsStack, getfilmsByGenreSelector, (stack, films) => stack < films.length);
