import React from "react";
import PropTypes from "prop-types";

const Review = ({review}) => {
  const {text, votes, userName, reviewDate} = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime="2016-12-24">{reviewDate}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{votes}</div>
    </div>
  );
};
// комментарии распределяются по колонкам(доделать)
// dateTime(доделать)
Review.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string.isRequired,
    votes: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    reviewDate: PropTypes.string.isRequired
  })};

export default Review;
