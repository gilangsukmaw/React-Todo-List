import { globalStatesName } from "../consts";

const ALL_TODO_INIT_STATE = {
  data: [],
  loading: true,
};

export const getAllTodoReducer = (state = ALL_TODO_INIT_STATE, action) => {
  switch (action.type) {
    case globalStatesName.getTodos:
      return { ...state, data: action.payload, loading: false };
    case globalStatesName.createTodo:
      const data = state.data;
      state.data.unshift(action.payload);
      return { ...state, data: data, loading: false };
    case globalStatesName.getTodosFailed:
      return { ...state, loading: false };
    default:
      return state;
  }
};
