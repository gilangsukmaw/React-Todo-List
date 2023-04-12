import axios from "axios";
import { getFromLocalStorate } from "../../../helper/localStorage";
import { apiHost, authRoutes, globalStatesName } from "../../consts";

export const loginAction = (payload) => {
  // Thunk Function
  return async (dispatch, getState) => {
    await axios
      .post(`${apiHost}${authRoutes.login}`, {
        email: payload.email,
        password: payload.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("username", response.data.data.username);
        localStorage.setItem("expiredAt", response.data.data.expiredAt);

        dispatch({
          type: globalStatesName.loginSucces,
          payload: {
            user: response.data.data,
            token: response.data.data.token,
          },
        });
        return Promise.resolve();
      })
      .catch((error) => {
        // if err >= 400
        dispatch({
          type: globalStatesName.loginFailed,
          payload: error.response.data,
        });

        return Promise.reject(error.response.data);
      });
  };
};

export const logoutAction = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: globalStatesName.logout,
    });
  };
};

export const checkToken = async () => {
  const token = getFromLocalStorate("token");

  // Fetching results from an API : asynchronous action
  await axios
    .get(`${apiHost}${authRoutes.checkToken}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};

// export const getProfile = () => {
//   return async (dispatch, getState) => {
//     const token = localStorage.getItem("token");

//     await axios(
//       requestParams("get", "/user", null, {
//         Authorization: "Bearer " + token,
//       })
//     )
//       .then((response) => {
//         dispatch({
//           type: "GET_USER_PROFILE_SUCCESS",
//           payload: { user: response.data.data },
//         });
//         return Promise.resolve();
//       })
//       .catch((error) => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("username");

//         dispatch({
//           type: "SIGN_OUT",
//         });

//         return Promise.reject(error.response.data);
//       });
//   };
// };
