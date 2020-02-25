const MAX_ACTORS = 4;

export const createActors = (actors) => {
  return actors.length > MAX_ACTORS
    ? `${actors.slice(0, MAX_ACTORS)} and other`
    : `${actors}`;
};
