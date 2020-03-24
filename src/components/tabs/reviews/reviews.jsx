import React from "react";
import PropTypes from "prop-types";
import Review from "../../review/review.jsx";
import {connect} from "react-redux";
import {getComments} from "../../../reducer/data/selector";

const Reviews = ({reviews}) => {
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </div>
  </div>;
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired
  }))
};

const mapStateToProps = (state) => ({
  reviews: getComments(state)
});

export {Reviews};
export default connect(mapStateToProps)(Reviews);
