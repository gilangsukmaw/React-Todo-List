import { globalStatesName } from "../consts";

const INITIAL_STATE = {
  show: false,
};
export const addTodoGroupsModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case globalStatesName.addTodoModalGroupShow:
      return {
        show: true,
      };
    case globalStatesName.addTodoModalGroupClose:
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};
