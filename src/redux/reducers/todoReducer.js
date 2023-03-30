import { globalStatesName } from "../consts";

const ALL_TODO_INIT_STATE = {
  data: [],
  loading: true,
};

export const todoReducer = (state = ALL_TODO_INIT_STATE, action) => {
  let data = state.data;
  let index = 0;
  switch (action.type) {
    //Get all Todo
    case globalStatesName.getTodos:
      return { ...state, data: action.payload, loading: false };

    //Get all Todo Failed
    case globalStatesName.getTodosFailed:
      return { ...state, loading: false };

    //Create Todo
    case globalStatesName.createTodo:
      state.data.unshift(action.payload);
      return { ...state, data: data, loading: false };

    //Delete Todo
    case globalStatesName.deleteTodo:
      data = state.data;
      const removed = data.find((x) => x.id === action.payload);
      index = data.indexOf(removed);
      if (index > -1) {
        // only splice array when item is found
        data.splice(index, 1); // 2nd parameter means remove one item only
      }

      return { ...state, data: data, loading: false };
    default:
      return state;
  }
};
