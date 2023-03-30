import { combineReducers } from "redux";
import { addTodoModalReducer } from "./addTodoModalReducer";
import { getAllTodoReducer } from "./getTodosReducer";

export const reducers = combineReducers({
  // counter: countReducer,
  addTodoModal: addTodoModalReducer,
  allTodos: getAllTodoReducer,
});
