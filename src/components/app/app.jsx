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
import {ActionCreator} from "../../reducer/state/state";
import Preloader from "../preloader/preloader.jsx";

// Main (/), Sign In (/login), MyList (/mylist), Film (/films/:id), Add review (/films/:id/review), Player (/player/:id).
const App = ({isPagePreloader, onFilmIdSet}) => {
  const renderMainPage = () => isPagePreloader ? <Preloader /> : <Main />;

  return (
    <Router history={history}>

      <Switch>

        <Route exact path="/" >
          {renderMainPage()}
        </Route>

        <Route path="/film/:id?" exact render={({match}) => {
          onFilmIdSet(match.params.id);
          return <Film />;
        }}/>

        <Route path="/player/:id?" exact render={({match}) => {
          onFilmIdSet(match.params.id);
          return <VideoPlayer />;
        }}/>

        <Route path="/login">
          <SignIn />
        </Route>


      </Switch>
    </Router>
  );
};

App.propTypes = {
  isPagePreloader: PropTypes.bool.isRequired,
  onFilmIdSet: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isPagePreloader: getPreloaderStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmIdSet(id) {
    dispatch(ActionCreator.setId(parseInt(id, 10)));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
