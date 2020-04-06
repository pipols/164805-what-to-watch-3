import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";
import {Router} from "react-router-dom";
import history from "../../history";

const LIGHT_LOGO_CLASS = `logo__link--light`;

describe(`<Logo>`, () => {
  it(`для header`, () => {
    const tree = renderer
  .create(
      <Router history={history}>
        <Logo />
      </Router>)
  .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`для footer`, () => {
    const tree = renderer
  .create(
      <Router history={history}>
        <Logo logoClass={LIGHT_LOGO_CLASS} />
      </Router>)
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
