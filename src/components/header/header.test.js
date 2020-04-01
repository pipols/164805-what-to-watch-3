import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Header} from "./header.jsx";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import history from "../../history";
import {AuthorizationStatus} from "../../const/common";

const mockStore = configureStore([]);


it(`<Header /> renders correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <Router history={history} >
          <Header
            authorizationStatus={AuthorizationStatus.AUTH}
            className={``}
            user={{}} />
        </Router>
      </Provider>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
