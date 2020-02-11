import React from 'react';
import PropTypes from "prop-types";
import MainComponent from '../main/main.jsx';

// eslint-disable-next-line react/prop-types
const App = ({promoMovieData, moviesTitle}) => {
  return (
    <MainComponent promoMovieData={promoMovieData} moviesTitle={moviesTitle}/>
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
