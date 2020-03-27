import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Film from "../film/film.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {connect} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";
import VideoPlayer from "../video-player/video-player.jsx";
import {getActiveFilm, getIsActivePlayer, getPreloaderStatus} from "../../reducer/state/selector";
import history from "../../history";

// Main (/), Sign In (/login), MyList (/mylist), Film (/films/:id), Add review (/films/:id/review), Player (/player/:id).
const App = ({activeFilm, isActivePlayer, isPagePreloader}) => {
  const renderMainPage = () => isPagePreloader ? <p style={{fontSize: `40px`}}>Loading...</p> : <Main />;

  return (
    <Router history={history}>

      <Switch>

        <Route exact path="/" >
          {renderMainPage()}
        </Route>

        <Route path="/film/:id?" exact component={Film} />

        <Route path="/login">
          <SignIn />
        </Route>

        <Route path="/player/:id">
          <VideoPlayer />
        </Route>

      </Switch>
    </Router>
  );

  // if (isPagePreloader) {
  //   return <p style={{fontSize: `40px`}}>Loading...</p>;
  // } else if (isActivePlayer) {
  //   return <VideoPlayer />;
  // } else if (activeFilm) {
  //   return <Film film={activeFilm} />;
  // } else {
  //   return <Main />;
  // }

};

App.propTypes = {
  activeFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    duration: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  isActivePlayer: PropTypes.bool.isRequired,
  isPagePreloader: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  activeFilm: getActiveFilm(state),
  isActivePlayer: getIsActivePlayer(state),
  isPagePreloader: getPreloaderStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
