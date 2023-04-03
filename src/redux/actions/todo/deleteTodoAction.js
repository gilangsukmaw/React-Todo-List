import axios from "axios";
import { getFromLocalStorate } from "../../../helper/localStorage";
import { apiHost, globalStatesName, todoRoutes } from "../../consts";

export const deleteTodo = (payload) => {
  const token = getFromLocalStorate("token");
  // Thunk Function
  return async (dispatch, getState) => {
    await axios
      .delete(`${apiHost}${todoRoutes.deleteTodo}/${payload}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch({
          type: globalStatesName.deleteTodo,
          payload: payload,
        });
        return Promise.resolve();
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  };
};
