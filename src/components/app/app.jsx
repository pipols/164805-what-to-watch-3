import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Film from "../film/film.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {connect} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";
import VideoPlayer from "../video-player/video-player.jsx";
import {getPreloaderStatus} from "../../reducer/state/selector";
import history from "../../history";

// Main (/), Sign In (/login), MyList (/mylist), Film (/films/:id), Add review (/films/:id/review), Player (/player/:id).
const App = ({isPagePreloader}) => {
  const renderMainPage = () => isPagePreloader ? <p style={{fontSize: `40px`}}>Loading...</p> : <Main />;

  return (
    <Router history={history}>

      <Switch>

        <Route exact path="/" >
          {renderMainPage()}
        </Route>

        <Route path="/film/:id?" exact component={Film} />
        <Route path="/player/:id?" exact component={VideoPlayer} />

        <Route path="/login">
          <SignIn />
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
  isPagePreloader: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isPagePreloader: getPreloaderStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
