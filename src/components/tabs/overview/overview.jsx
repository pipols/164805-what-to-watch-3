import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilm} from "../../../reducer/state/selector";
import {getFilmRating} from "../../../utils/utils";

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

const Overview = ({film: {rating, votes, description, producer, actors}}) => (
  <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getFilmRating(rating)}</span>
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
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    duration: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  film: getFilm(state)
});

export {Overview};
export default connect(mapStateToProps)(React.memo(Overview));
