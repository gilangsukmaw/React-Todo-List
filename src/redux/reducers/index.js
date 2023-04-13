import { combineReducers } from "redux";
import { addTodoModalReducer } from "./addTodoModalReducer";
import { authReducer } from "./authReducer";
import { todoGroupReducer } from "./todoGroupsReducer";
import { todoReducer } from "./todoReducer";

export const reducers = combineReducers({
  authState: authReducer,
  addTodoModal: addTodoModalReducer,
  allTodos: todoReducer,
  allTodoGroup: todoGroupReducer,
});
