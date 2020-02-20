import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const onMovieTitleClick = () => {};

const App = ({promoMovieData, filmsData}) => {
  return (
    <Main
      promoMovieData={promoMovieData}
      filmsData={filmsData}
      onMovieTitleClick={onMovieTitleClick}
    />
  );
};

App.propTypes = {
  promoMovieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })).isRequired
};

export default App;
