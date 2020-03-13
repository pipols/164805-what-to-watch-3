import React from "react";
import PropTypes from "prop-types";

const Logo = ({logoClass}) => {
  return (
    <div className="logo">
      <a href="main.html" className={`logo__link ${logoClass || ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>);
};

Logo.propTypes = {
  logoClass: PropTypes.string
};

export default Logo;
