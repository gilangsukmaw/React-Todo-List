import { globalStatesName } from "../consts";

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

let INITIAL_STATE = token
  ? { isLoggedIn: true, token, user: { username } }
  : { isLoggedIn: false, user: null, error: {} };

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case globalStatesName.loginSucces:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case globalStatesName.userProfile:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };

    case globalStatesName.loginFailed:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        error: action.payload,
      };

    case globalStatesName.logout:
      localStorage.removeItem("token");
      return state;
    default:
      return state;
  }
};
