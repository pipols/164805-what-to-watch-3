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
import AddReview from "../add-review/add-review.jsx";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {getUserStatus} from "../../reducer/user/selector.js";
import {AuthorizationStatus} from "../../const/common";


const App = ({isPagePreloader, onFilmIdSet, authorizationStatus}) => {
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

        <PrivateRoute path="/films/:id/review" exact render={(match) => {
          onFilmIdSet(match.params.id);
          return <AddReview />;
        }}/>

        <Route path="/login" exact render={() => {
          return (
            authorizationStatus === AuthorizationStatus.NO_AUTH
              ? <SignIn />
              : renderMainPage()
          );
        }} />

        <PrivateRoute path="/mylist" exact render={() => {
          return <MyList />;
        }} />

      </Switch>
    </Router>
  );
};

App.propTypes = {
  isPagePreloader: PropTypes.bool.isRequired,
  onFilmIdSet: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isPagePreloader: getPreloaderStatus(state),
  authorizationStatus: getUserStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmIdSet(id) {
    dispatch(ActionCreator.setId(parseInt(id, 10)));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(App));
