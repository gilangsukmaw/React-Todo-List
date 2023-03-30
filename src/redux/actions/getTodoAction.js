import axios from "axios";
import { apiHost, globalStatesName, todoRoutes } from "../consts";

export const getTodosData = () => {
  // Thunk Function
  return async (dispatch, getState) => {
    // Fetching results from an API : asynchronous action
    await axios
      .get(`${apiHost}${todoRoutes.getAllTodos}`)
      .then((response) => {
        dispatch({
          type: globalStatesName.getTodos,
          payload: response.data.data,
        });

        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({
          type: globalStatesName.getTodosFailed,
        });
        //handle error
        return Promise.reject(error.response.data);
      });
  };
};
