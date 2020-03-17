import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Film from "../film/film.jsx";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import VideoPlayer from "../video-player/video-player.jsx";

const App = ({activeFilm, isActivePlayer, promoMovieData}) => {
  const renderApp = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main promoMovieData={promoMovieData} />
        </Route>
        <Route path="/film">
          <Film film={activeFilm} />
        </Route>
      </Switch>
    </BrowserRouter>);

  return (
    isActivePlayer
      ? <VideoPlayer />
      : renderApp()
  );
};

App.propTypes = {
  promoMovieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  activeFilm: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    ratingDescription: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      reviewDate: PropTypes.string.isRequired
    }))
  })
};

const mapStateToProps = (state) => ({
  activeFilm: state.activeFilm,
  isActivePlayer: state.isActivePlayer
});

export {App};
export default connect(mapStateToProps)(App);
