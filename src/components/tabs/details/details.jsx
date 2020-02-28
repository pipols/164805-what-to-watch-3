import React from "react";
import PropTypes from "prop-types";
// упростить: императивно || декларативно || "пох"
const Details = ({producer, actors, duration, genre, year}) => (
  <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{producer}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {actors.map((name) => <> {name} <br/> </>)}
        </span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{duration}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">{genre}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">{year}</span>
      </p>
    </div>
  </div>
);

Details.propTypes = {
  producer: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default Details;
