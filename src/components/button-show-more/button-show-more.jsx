import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionType} from "../../reducer";

const ButtonShowMore = ({onShowMoreClick}) => (
  <div className="catalog__more">
    <button onClick={onShowMoreClick} className="catalog__button" type="button">Show more</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch({
      type: ActionType.ADD_CARDS_STACK
    });
  }
});

ButtonShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired
};

export {ButtonShowMore};
export default connect(null, mapDispatchToProps)(ButtonShowMore);
