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

const promoKeysMap = {
  name: `title`,
  released: `year`
};

export const adapterFilms = (obj) => {
  const renamedObject = obj.map((elem) => objectKeysToCamelCase(elem));
  return renamedObject.map((elem) => Object.keys(elem).reduce((acc, key) => extend(acc, {[filmskeysMap[key] || key]: elem[key]}), {}));
};

export const adapterPromo = (obj) => {
  const renamedObject = objectKeysToCamelCase(obj);
  return Object.keys(renamedObject).reduce((acc, key) => extend(acc, {[promoKeysMap[key] || key]: renamedObject[key]}), {});
};
