import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";

const LIGHT_LOGO_CLASS = `logo__link--light`;

describe(`<Logo>`, () => {
  it(`для header`, () => {
    const tree = renderer
  .create(<Logo />)
  .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`для footer`, () => {
    const tree = renderer
  .create(<Logo logoClass={LIGHT_LOGO_CLASS} />)
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
