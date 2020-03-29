import {createSelector} from "reselect";
import {getFilters, getfilmsByGenre} from "../../utils/utils";
import NameSpace from "../name-space";
import {getFilms} from "../data/selector";

const NAME_SPACE = NameSpace.STATE;

export const getGenre = (state) => state[NAME_SPACE].genre;
export const getActiveFilm = (state) => state[NAME_SPACE].activeFilm; // rename/delete
export const getIsActivePlayer = (state) => state[NAME_SPACE].isActivePlayer;
export const getShownCardsStack = (state) => state[NAME_SPACE].shownCardsStack;
export const getPreloaderStatus = (state) => state[NAME_SPACE].isPagePreloader;
export const getReviewFormStatus = (state) => state[NAME_SPACE].isFormDisabled;
// refactoring
export const getId = (state) => state[NAME_SPACE].id;
export const getFilm = createSelector(
    getFilms,
    getId,
    (films, id) => films.find((film) => film.id === id)
);

export const getFiltersSelector = createSelector(
    getFilms,
    (films) => getFilters(films));

export const getfilmsByGenreSelector = createSelector(
    getFilms,
    getGenre,
    (films, genre) => getfilmsByGenre(films, genre));

export const getShownFilmsSelector = createSelector(
    getFilms,
    getGenre,
    getShownCardsStack,
    (films, genre, stack) => getfilmsByGenre(films, genre).slice(0, stack));

export const getIsShowButtonSelector = createSelector(
    getShownCardsStack,
    getfilmsByGenreSelector,
    (stack, films) => stack < films.length);
