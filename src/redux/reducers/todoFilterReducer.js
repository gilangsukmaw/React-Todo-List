import { globalStatesName } from "../consts";

const INITIAL_STATE = {
  all: true,
  done: false,
  undone: false,
};
export const todoFilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case globalStatesName.todoFilterAll:
      return {
        all: true,
        done: false,
        undone: true,
      };

    case globalStatesName.todoFilterDone:
      return {
        all: false,
        done: true,
        undone: false,
      };

    case globalStatesName.todoFilterUndone:
      return {
        all: false,
        done: false,
        undone: true,
      };
    default:
      return INITIAL_STATE;
  }
};
