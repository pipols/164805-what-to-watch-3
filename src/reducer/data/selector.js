import NameSpace from "../name-space";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => state[NAME_SPACE].films;
export const getPromoMovie = (state) => state[NAME_SPACE].promoMovie;
export const getComments = (state) => state[NAME_SPACE].comments;
export const getIsFavorite = createSelector(
    getFilms,
    (films) => films.filter((film) => film.isFavorite)
);
