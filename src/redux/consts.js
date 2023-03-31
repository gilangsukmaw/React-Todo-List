const { REACT_APP_API } = process.env;

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
};

export const apiHost = REACT_APP_API;

export const todoRoutes = {
  getAllTodos: "/api/v1/todos",
  createTodo: "/api/v1/todos",
  doneTodo: "/api/v1/todos/done",
  undoneTodo: "/api/v1/todos/undone",
  deleteTodo: "/api/v1/todos/delete",
};
