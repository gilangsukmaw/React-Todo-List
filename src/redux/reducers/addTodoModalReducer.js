import { globalStatesName } from "../consts";

const INITIAL_STATE = {
  show: false,
};
export const addTodoModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case globalStatesName.addTodoModalShow:
      return {
        show: true,
      };
    case globalStatesName.addTodoModalClose:
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};
