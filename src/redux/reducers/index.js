import { combineReducers } from "redux";
import { addTodoModalReducer } from "./addTodoModalReducer";
import { todoReducer } from "./todoReducer";

export const reducers = combineReducers({
  // counter: countReducer,
  addTodoModal: addTodoModalReducer,
  allTodos: todoReducer,
});
