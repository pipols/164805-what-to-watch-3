import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {DataOperation} from "../../reducer/data/data";
import {getIsUserAuth} from "../../reducer/user/selector";

const MovieCardButtons = ({filmId, isFavorite, isMainPage, onPostFavorite, isUserAuth}) => (
  <div className="movie-card__buttons">

    <Link to={`/player/${filmId}`} className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </Link>

    {isUserAuth
      && <a onClick={() => onPostFavorite(filmId, isFavorite)} className="btn btn--list movie-card__button" type="button">

        {isFavorite
        && <svg viewBox="0 0 18 14" width={18} height={14}>
          <use xlinkHref="#in-list"></use>
        </svg>}

        {isFavorite
        || <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add"/>
        </svg>}

        <span>My list</span>
      </a>}

    {isMainPage || <Link to={`/films/${filmId}/review`} className="btn movie-card__button">
      Add review
    </Link>}

  </div>
);

MovieCardButtons.propTypes = {
  filmId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isMainPage: PropTypes.bool,
  onPostFavorite: PropTypes.func.isRequired,
  isUserAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuth: getIsUserAuth(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPostFavorite(id, status) {
    dispatch(DataOperation.postFavorite(id, +!status));
  }
});

export {MovieCardButtons};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MovieCardButtons));
