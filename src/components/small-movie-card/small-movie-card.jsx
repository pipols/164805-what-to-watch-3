import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const PREFIX = `img/`;
const DELAY = 1000;
let timerId;

const setTimer = (film, cb) => {
  timerId = setTimeout(() => cb(film), DELAY);
};

const clearTimer = (cb) => {
  clearTimeout(timerId);
  cb(null);
};

const SmallMovieCard = ({film, setActiveFilm, handlerItemClick, isPlay}) => {
  const {title, poster, preview} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setTimer(film, handlerItemClick)}
      onMouseLeave={() => clearTimer(handlerItemClick)}
      onClick={() => setActiveFilm(film)}
    >
      <div className="small-movie-card__image">
        {isPlay
          ? <video src={preview} autoPlay poster={poster} muted width="280" height="175"/>
          : <img src={PREFIX + poster} alt="{title}" width="280" height="175"/>}
      </div>

      <h3 className="small-movie-card__title" >
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    ratingDescription: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      reviewDate: PropTypes.string.isRequired
    }))
  }).isRequired,
  setActiveFilm: PropTypes.func.isRequired,
  isPlay: PropTypes.bool.isRequired,
  handlerItemClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setActiveFilm(film) {
    dispatch(ActionCreator.setActiveFilm(film));
    dispatch(ActionCreator.setGenre(film.genre));
  }
});

export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);
