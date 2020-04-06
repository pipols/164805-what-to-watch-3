import React from "react";
import PropTypes from "prop-types";
import {TabName} from "../../const/common";

const NAV_ACTIVE_CLASS = `movie-nav__item--active`;

const Tabs = (props) => {
  const {onItemClick, activeItem} = props;

  const setActiveClass = (currentTab) => {
    return activeItem === currentTab ? NAV_ACTIVE_CLASS : ``;
  };

  return (
    <ul className="movie-nav__list">
      <li className={`movie-nav__item ${setActiveClass(TabName.OVERVIEW)}`}>
        <a onClick={() => onItemClick(TabName.OVERVIEW)} href="#" className="movie-nav__link">Overview</a>
      </li>
      <li className={`movie-nav__item ${setActiveClass(TabName.DETAILS)}`}>
        <a onClick={() => onItemClick(TabName.DETAILS)} href="#" className="movie-nav__link">Details</a>
      </li>
      <li className={`movie-nav__item ${setActiveClass(TabName.REVIEWS)}`}>
        <a onClick={() => onItemClick(TabName.REVIEWS)} href="#" className="movie-nav__link">Reviews</a>
      </li>
    </ul>
  );
};

Tabs.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired
};

export default React.memo(Tabs);
