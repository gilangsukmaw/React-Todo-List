import axios from "axios";
import { getFromLocalStorate } from "../../../helper/localStorage";
import { apiHost, globalStatesName, todoRoutes } from "../../consts";

export const addTodo = (payload) => {
  const token = getFromLocalStorate("token");
  // Thunk Function
  return async (dispatch, getState) => {
    await axios
      .post(
        `${apiHost}${todoRoutes.createTodo}`,
        { title: payload.title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
