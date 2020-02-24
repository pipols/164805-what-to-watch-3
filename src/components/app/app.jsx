import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const onMovieTitleClick = () => {};

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {promoMovieData, filmsData} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              promoMovieData={promoMovieData}
              filmsData={filmsData}
              onMovieTitleClick={onMovieTitleClick}
            />
          </Route>
          <Route exact path="/movie-page">
            <MoviePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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
