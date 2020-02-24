import React from "react";

export const createParagraf = (text) => text
  .split(`\n`) // ?
  .map((paragraf) => {
    return <p key={paragraf}>{paragraf}</p>;
  });

export const createActors = (actors) => {
  return actors.length > 4
    ? `${actors.slice(3)} and other`
    : `${actors}`;
};
