import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const MoviesList = ({films, onItemClick, activeItem}) => (
  <div className="catalog__movies-list">
    {films.map((film, i) =>
      <SmallMovieCard
        film={film}
        key={film.title + i}
        onItemClick={onItemClick}
        isPlay={activeItem === film} />
    )}
  </div>
);

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
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
  }),
};

export {MoviesList};
export default withActiveItem(MoviesList);
