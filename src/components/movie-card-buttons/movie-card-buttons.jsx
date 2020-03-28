import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getId} from "../../reducer/state/selector";

const MovieCardButtons = ({id, isMainPage}) => (
  <div className="movie-card__buttons">

    <Link to={`/player/${id}`} className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </Link>

    <Link to="/mylist" className="btn btn--list movie-card__button" type="button">
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#add"/>
      </svg>
      <span>My list</span>
    </Link>

    {isMainPage || <Link to={`/films/${id}/review`} className="btn movie-card__button">
      Add review
    </Link>}

  </div>
);

MovieCardButtons.propTypes = {
  id: PropTypes.number.isRequired,
  isMainPage: PropTypes.bool
};

const mapStateToProps = (state) => ({
  id: getId(state)
});

export {MovieCardButtons};
export default connect(mapStateToProps)(React.memo(MovieCardButtons));
