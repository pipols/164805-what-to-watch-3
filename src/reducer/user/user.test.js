import {reducer, initialState, ActionCreator} from "./user";
import {AuthorizationStatus} from "../../const/common";

const user = {
  "id": 1,
  "email": `Oliver.conner@gmail.com`,
  "name": `Oliver.conner`,
  "avatar_url": `img/1.png`
};

describe(`reducer data`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(initialState, {})).toBe(initialState);
  });

  it(`should handle REQUIRED_AUTHORIZATION`, () => {
    expect(reducer({authorizationStatus: AuthorizationStatus.NO_AUTH}, ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))).toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it(`should handle SET_USER_DATA`, () => {
    expect(reducer({userData: {}}, ActionCreator.setUserData(user))).toEqual({userData: user});
  });

});
