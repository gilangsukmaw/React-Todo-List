import { globalStatesName } from "../../consts";

export const allTodoFilterActions = () => {
  return {
    type: globalStatesName.todoFilterAll,
  };
};

export const doneTodoFilterActions = () => {
  return {
    type: globalStatesName.todoFilterDone,
  };
};

export const undoneTodoFilterActions = () => {
  return {
    type: globalStatesName.todoFilterUndone,
  };
};
