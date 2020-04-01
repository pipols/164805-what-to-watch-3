import {extend, objectKeysToCamelCase} from "./utils";

const filmskeysMap = {
  backgroundImage: `poster`,
  posterImage: `cover`,
  name: `title`,
  released: `year`,
  starring: `actors`,
  director: `producer`,
  scoresCount: `votes`,
  runTime: `duration`,
  previewVideoLink: `preview`
};

export const adapterFilm = (film) => {
  const renamedFilm = objectKeysToCamelCase(film);
  return Object.keys(renamedFilm).reduce((acc, key) => extend(acc, {[filmskeysMap[key] || key]: renamedFilm[key]}), {});
};

export const adapterFilms = (films) => films.map((film) => adapterFilm(film));
