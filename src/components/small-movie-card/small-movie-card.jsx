import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const PREFIX = `img/`;

const SmallMovieCard = ({movie, onMovieClick, onMovieHover, isPlay}) => {
  const {title, poster, preview} = movie;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMovieHover(movie)}
      onMouseLeave={() => onMovieHover(null)}
      onClick={() => onMovieClick(movie)}
    >
      <div className="small-movie-card__image">
        {isPlay
          ? <VideoPlayer poster={poster} preview={preview}/>
          : <img src={PREFIX + poster} alt="{title}" width="280" height="175"/>}
      </div>

      <h3 className="small-movie-card__title" >
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired}).isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onMovieHover: PropTypes.func.isRequired,
  isPlay: PropTypes.bool.isRequired
};

export default SmallMovieCard;
