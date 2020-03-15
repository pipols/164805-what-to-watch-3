import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const ButtonShowMore = ({onShowMoreClick}) => (
  <div className="catalog__more">
    <button onClick={onShowMoreClick} className="catalog__button" type="button">Show more</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(ActionCreator.addCardsStack());
  }
});

ButtonShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired
};

export {ButtonShowMore};
export default connect(null, mapDispatchToProps)(ButtonShowMore);
