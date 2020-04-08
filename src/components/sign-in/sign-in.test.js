import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";
import {AuthorizationStatus} from "../../const/common";
import {Router} from "react-router-dom";
import history from "../../history";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }
});

it(`<SignIn /> renders correctly`, () => {

  const tree = renderer
  .create(
      <Provider store={store}>
        <Router history={history} >
          <SignIn
            onLogin={() => {}}
            onFieldChange={() => {}}
            onEmailValidity={() => {}}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            email={`qqq@qq.qq`}
            password={`qqq`}
            isEmailValid={true}
          />
        </Router>
      </Provider>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
