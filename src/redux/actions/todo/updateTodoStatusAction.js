import axios from "axios";
import { apiHost, todoRoutes } from "../../consts";

export const doneTodo = (payload) => {
  // Thunk Function
  return async (dispatch, getState) => {
    await axios
      .put(`${apiHost}${todoRoutes.doneTodo}/${payload}`)
      .then((response) => {
        return Promise.resolve();
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  };
};

export const undoneTodo = (payload) => {
  // Thunk Function
  return async (dispatch, getState) => {
    await axios
      .put(`${apiHost}${todoRoutes.undoneTodo}/${payload}`)
      .then((response) => {
        return Promise.resolve();
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  };
};
