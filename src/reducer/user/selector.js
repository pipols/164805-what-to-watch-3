import NameSpace from "../name-space";
import {AuthorizationStatus} from "../../const/common";

const NAME_SPACE = NameSpace.USER;

export const getUserStatus = (state) => state[NAME_SPACE].authorizationStatus;
export const getUserData = (state) => state[NAME_SPACE].userData;
export const getIsUserAuth = (state) => state[NAME_SPACE].authorizationStatus === AuthorizationStatus.AUTH;
