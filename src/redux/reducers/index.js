import { combineReducers } from "redux";
import { addTodoModalReducer } from "./addTodoModalReducer";
import { authReducer } from "./authReducer";
import { todoReducer } from "./todoReducer";

export const reducers = combineReducers({
  authState: authReducer,
  addTodoModal: addTodoModalReducer,
  allTodos: todoReducer,
});
