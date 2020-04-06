import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";
import {AuthorizationStatus} from "../../const/common";
import {Router} from "react-router-dom";
import history from "../../history";

it(`<SignIn /> renders correctly`, () => {

  const tree = renderer
  .create(
      <Router history={history} >
        <SignIn
          onLogin={() => {}}
          onFieldChange={() => {}}
          onEmailValidity={() => {}}
          authorizationStatus={AuthorizationStatus.AUTH}
          email={`qqq@qq.qq`}
          password={`qqq`}
          isEmailValid={true}
        />
      </Router>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
