import { globalStatesName } from "../../consts";

export const addTodoModalShowActions = () => {
  return {
    type: globalStatesName.addTodoModalShow,
  };
};

export const addTodoModalCloseActions = () => {
  return {
    type: globalStatesName.addTodoModalClose,
  };
};
