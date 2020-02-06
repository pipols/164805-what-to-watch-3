import React from 'react';
import MainComponent from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoMovieData} = props;

  return (
    <MainComponent promoMovieData={promoMovieData}/>
  );
};

export default App;
