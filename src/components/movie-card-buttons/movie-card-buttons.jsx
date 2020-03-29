import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCardButtons = ({filmId, isFavorite, isMainPage}) => (
  <div className="movie-card__buttons">

    <Link to={`/player/${filmId}`} className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </Link>

    <Link to="/mylist" className="btn btn--list movie-card__button" type="button">

      {isFavorite
        && <svg viewBox="0 0 18 14" width={18} height={14}>
          <use xlinkHref="#in-list"></use>
        </svg>}

      {isFavorite
        || <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add"/>
        </svg>}

      <span>My list</span>
    </Link>

    {isMainPage || <Link to={`/films/${filmId}/review`} className="btn movie-card__button">
      Add review
    </Link>}

  </div>
);

MovieCardButtons.propTypes = {
  filmId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isMainPage: PropTypes.bool
};

export {MovieCardButtons};
export default React.memo(MovieCardButtons);
