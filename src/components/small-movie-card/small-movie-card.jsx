import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state";

const DELAY = 1000;
let timerId;

const setTimer = (film, cb) => {
  timerId = setTimeout(() => cb(film), DELAY);
};

const clearTimer = (cb) => {
  clearTimeout(timerId);
  cb(null);
};

const SmallMovieCard = ({film, setActiveFilm, onItemClick, isPlay}) => {
  const {title, poster, preview} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setTimer(film, onItemClick)}
      onMouseLeave={() => clearTimer(onItemClick)}
      onClick={() => setActiveFilm(film)}
    >
      <div className="small-movie-card__image">
        {isPlay
          ? <video src={preview} autoPlay muted width="280" height="175"/>
          : <img src={poster} alt={title} width="280" height="175"/>}
      </div>

      <h3 className="small-movie-card__title" >
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
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
  setActiveFilm: PropTypes.func.isRequired,
  isPlay: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setActiveFilm(film) {
    dispatch(ActionCreator.setActiveFilm(film));
    dispatch(ActionCreator.setGenre(film.genre));
  }
});

export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);
