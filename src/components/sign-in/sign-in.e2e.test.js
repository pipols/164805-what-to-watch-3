import React from "react";
import {shallow} from "enzyme";
import {SignIn} from "./sign-in.jsx";
import {AuthorizationStatus} from "../../const/common";

const onLogin = jest.fn();
const onFieldChange = jest.fn();
const onEmailValidity = jest.fn();

describe(`<SignIn />`, () => {

  const wrapper = shallow(
      <SignIn
        onLogin={onLogin}
        onFieldChange={onFieldChange}
        onEmailValidity={onEmailValidity}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        email={`qqq@qq.qq`}
        password={`qqq`}
        isEmailValid={true}
      />
  );
  const form = wrapper.find(`form`);

  it(`onLogin вернет обьект с login и password`, () => {
    form.simulate(`submit`, {preventDefault() {}});
    expect(onLogin).toHaveBeenCalledTimes(1);
    expect(onLogin.mock.calls[0][0]).toMatchObject({login: `qqq@qq.qq`, password: `qqq`});
  });
});
