import axios from "axios";
import { getFromLocalStorate } from "../../../helper/localStorage";
import { apiHost, globalStatesName, todoRoutes } from "../../consts";

export const getTodosData = () => {
  const token = getFromLocalStorate("token");

  // Thunk Function
  return async (dispatch, getState) => {
    // Fetching results from an API : asynchronous action
    await axios
      .get(`${apiHost}${todoRoutes.getAllTodos}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
        if (error.response.data.code === 401) {
          dispatch({
            type: globalStatesName.logout,
          });
        }

        //handle error
        return Promise.reject(error.response.data);
      });
  };
};
