import NameSpace from "../name-space";
import {AuthorizationStatus} from "./user";

const NAME_SPACE = NameSpace.USER;

export const getUserStatus = (state) => state[NAME_SPACE].authorizationStatus === AuthorizationStatus.AUTH;
