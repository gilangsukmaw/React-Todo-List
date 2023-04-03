import axios from "axios";
import { getFromLocalStorate } from "../../../helper/localStorage";
import { apiHost, todoRoutes } from "../../consts";

export const doneTodo = (payload) => {
  const token = getFromLocalStorate("token");
  // Thunk Function
  return async (dispatch, getState) => {
    await axios
      .put(
        `${apiHost}${todoRoutes.doneTodo}/${payload}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return Promise.resolve();
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  };
};

export const undoneTodo = (payload) => {
  const token = getFromLocalStorate("token");
  // Thunk Function
  return async (dispatch, getState) => {
    await axios
      .put(
        `${apiHost}${todoRoutes.undoneTodo}/${payload}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return Promise.resolve();
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  };
};
