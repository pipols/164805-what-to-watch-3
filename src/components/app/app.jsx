import React from 'react';
import MainComponent from '../main/main.jsx';

// eslint-disable-next-line react/prop-types
const App = ({promoMovieData, moviesTitle}) => {
  return (
    <MainComponent promoMovieData={promoMovieData} moviesTitle={moviesTitle}/>
  );
};

export default App;
