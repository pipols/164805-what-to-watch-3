import React from "react";
import PropTypes from "prop-types";

const createParagraf = (text) => text
  .split(`\n`)
  .map((paragraf) => {
    return <p key={paragraf}>{paragraf}</p>;
  });

const MAX_ACTORS = 4;

const writeActors = (actors) => {
  return actors.length > MAX_ACTORS
    ? `${actors.slice(0, MAX_ACTORS)} and other`
    : `${actors}`;
};
//  доделать
// https://up.htmlacademy.ru/react/3/project/what-to-watch#rating
const Overview = ({rating, votes, description, producer, actors}) => (
  <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{}</span>
        <span className="movie-rating__count">{votes} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      {createParagraf(description)}
      <p className="movie-card__director"><strong>Director: {producer}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {writeActors(actors)}</strong></p>
    </div>
  </React.Fragment>
);

Overview.propTypes = {
  rating: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Overview;
