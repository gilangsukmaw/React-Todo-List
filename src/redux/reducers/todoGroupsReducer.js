import { globalStatesName } from "../consts";

const ALL_TODO_INIT_STATE = {
  data: [],
  loading: true,
};

export const todoGroupReducer = (state = ALL_TODO_INIT_STATE, action) => {
  switch (action.type) {
    //Get all Todo
    case globalStatesName.getTodoGroups:
      return { ...state, data: action.payload, loading: false };

    //Get all Todo Failed
    case globalStatesName.getTodoGroupsFailed:
      return { ...state, loading: false };

    default:
      return state;
  }
};
