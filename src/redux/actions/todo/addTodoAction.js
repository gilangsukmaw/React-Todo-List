import axios from "axios";
import { apiHost, globalStatesName, todoRoutes } from "../../consts";

export const addTodo = (payload) => {
  // Thunk Function
  return async (dispatch, getState) => {
    await axios
      .post(`${apiHost}${todoRoutes.createTodo}`, { title: payload.title })
      .then((response) => {
        dispatch({
          type: globalStatesName.createTodo,
          payload: response.data.data,
        });
        return Promise.resolve();
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  };
};
