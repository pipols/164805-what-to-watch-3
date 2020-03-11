import React from "react";
import PropTypes from "prop-types";
import {TabName} from "../../const/common";

const NAV_ACTIVE_CLASS = `movie-nav__item--active`;

const Tabs = (props) => {
  const {onTabClick, activeTab} = props;

  const setActiveClass = (currentTab) => {
    return activeTab === currentTab ? NAV_ACTIVE_CLASS : ``;
  };

  return (
    <ul className="movie-nav__list">
      <li className={`movie-nav__item ${setActiveClass(TabName.OVERVIEW)}`}>
        <a onClick={() => onTabClick(TabName.OVERVIEW)} href="#" className="movie-nav__link">Overview</a>
      </li>
      <li className={`movie-nav__item ${setActiveClass(TabName.DETAILS)}`}>
        <a onClick={() => onTabClick(TabName.DETAILS)} href="#" className="movie-nav__link">Details</a>
      </li>
      <li className={`movie-nav__item ${setActiveClass(TabName.REVIEWS)}`}>
        <a onClick={() => onTabClick(TabName.REVIEWS)} href="#" className="movie-nav__link">Reviews</a>
      </li>
    </ul>
  );
};

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};

export default Tabs;
