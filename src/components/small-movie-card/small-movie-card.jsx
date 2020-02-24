import React from "react";
import PropTypes from "prop-types";

const PREFIX = `img/`;
// test на onHover
const SmallMovieCard = ({movie, onMovieTitleClick, onMovieHover}) => {
  const {title, poster} = movie;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMovieHover(movie)}
      onMouseLeave={() => onMovieHover(null)}
    >
      <div className="small-movie-card__image">
        <img src={PREFIX + poster} alt="{title}" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={onMovieTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired}).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onMovieHover: PropTypes.func.isRequired
};

export default SmallMovieCard;
