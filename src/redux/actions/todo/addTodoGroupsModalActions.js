import { globalStatesName } from "../../consts";

export const addTodoGroupsModalShowActions = () => {
  return {
    type: globalStatesName.addTodoModalGroupShow,
  };
};

export const addTodoGroupsModalCloseActions = () => {
  return {
    type: globalStatesName.addTodoModalGroupClose,
  };
};
