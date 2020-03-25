import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => state[NAME_SPACE].films;
export const getPromoMovie = (state) => state[NAME_SPACE].promoMovie;
export const getComments = (state) => state[NAME_SPACE].comments;
export const getPreloaderStatus = (state) => state[NAME_SPACE].isPagePreloader;
