import React from 'react';
import PropTypes from "prop-types";
import MainComponent from '../main/main.jsx';

const mainTitleClickHandler = () => {};

const App = ({promoMovieData, moviesTitle}) => {
  return (
    <MainComponent
      promoMovieData={promoMovieData}
      moviesTitle={moviesTitle}
      mainTitleClickHandler={mainTitleClickHandler}
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
