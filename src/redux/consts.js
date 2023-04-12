import env from "react-dotenv";

export const globalStatesName = {
  addTodoModalShow: "ADD_TODO_MODAL_SHOW",
  addTodoModalClose: "ADD_TODO_MODAL_ClOSE",

  getTodos: "GET_TODOS",
  getTodosFailed: "GET_TODOS_FAILED",

  createTodo: "CREATE_TODO",
  createTodoFailed: "CREATE_TODO_FAILED",

  doneTodo: "DONE_TODO",
  doneTodoFailed: "DONE_TODO_FAILED",

  undoneTodo: "UNDONE_TODO",
  undoneTodoFailed: "UNDONE_TODO_FAILED",

  deleteTodo: "DELETE_TODO",
  deleteTodoFailed: "DELETE_TODO_FAILED",

  loginSucces: "LOGIN",
  loginFailed: "LOGIN_FAILED",

  userProfile: "GET_USER_PROFILE",

  todoFilterAll: "TODO_FILTER_ALL",
  todoFilterDone: "TODO_FILTER_DONE",
  todoFilterUndone: "TODO_FILTER_UNDONE",

  logout: "LOGOUT",
};

export const apiHost = env.API_URL;

export const authRoutes = {
  login: "/api/v1/auth/login",
  register: "/api/v1/auth/register",
  checkToken: "api/v1/auth/check/token",
};

export const todoRoutes = {
  getAllTodos: "/api/v1/todos",
  createTodo: "/api/v1/todos",
  doneTodo: "/api/v1/todos/done",
  undoneTodo: "/api/v1/todos/undone",
  deleteTodo: "/api/v1/todos/delete",
};
