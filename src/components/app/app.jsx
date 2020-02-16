import React from 'react';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';

const movieTitleClickHandler = () => {};

const App = ({promoMovieData, moviesTitle}) => {
  return (
    <Main
      promoMovieData={promoMovieData}
      moviesTitle={moviesTitle}
      movieTitleClickHandler={movieTitleClickHandler}
    />
  );
};

App.propTypes = {
  promoMovieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  moviesTitle: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
