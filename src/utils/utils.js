import {mapGenresToFilter} from "../const/genres";

const DEFAULT_FILTER = `All genres`;
const MAX_GENRES = 9;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilters = (films) => {
  const filters = getUniqueGenres(films).map((genre) => mapGenresToFilter.get(genre));
  filters.unshift(DEFAULT_FILTER);
  return filters;
};

const getUniqueGenres = (films) => {
  const genresList = films.map((film) => film.genre);
  const uniqueGenres = new Set(genresList);
  return [...uniqueGenres].slice(0, MAX_GENRES);
};

const getKeyToMap = (map, value) => [...map].find(([, val]) => val === value)[0];

export const getFilmsByFilter = (films, filterValue) => {
  const genre = getKeyToMap(mapGenresToFilter, filterValue);
  if (filterValue === DEFAULT_FILTER) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};
