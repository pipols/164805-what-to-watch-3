import React from "react";
import PropTypes from "prop-types";
import Review from "../../review/review.jsx";

const Reviews = ({reviews}) => {
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {reviews.map((review) => <Review key={review} review={review} />)}
    </div>
  </div>;
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    votes: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    reviewDate: PropTypes.string.isRequired
  }))
};

export default Reviews;
