import { combineReducers } from "redux";
import { addTodoGroupsModalReducer } from "./addTodoGroupsModalReducer";
import { addTodoModalReducer } from "./addTodoModalReducer";
import { authReducer } from "./authReducer";
import { todoGroupReducer } from "./todoGroupsReducer";
import { todoReducer } from "./todoReducer";

export const reducers = combineReducers({
  authState: authReducer,
  addTodoModal: addTodoModalReducer,
  addTodoGroupModal: addTodoGroupsModalReducer,
  allTodos: todoReducer,
  allTodoGroup: todoGroupReducer,
});
