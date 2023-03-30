import axios from "axios";
import { apiHost, globalStatesName, todoRoutes } from "../../consts";

export const deleteTodo = (payload) => {
  // Thunk Function
  return async (dispatch, getState) => {
    await axios
      .delete(`${apiHost}${todoRoutes.deleteTodo}/${payload}`)
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
