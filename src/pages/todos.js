import { DispatchCtx } from "../router";
import { useContext, useEffect } from "react";

import Card from "../components/card/todoCard";
import { useSelector } from "react-redux";
import AddTodosForm from "../components/form/addTodos";
import { getTodosData } from "../redux/actions/todo/getTodoAction";
import { addTodoModalShowActions } from "../redux/actions/todo/addTodoModalActions";
import Filter from "../components/dropdown/todoFilter";

function Todos() {
  const dayjs = require("dayjs");
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  const dispatch = useContext(DispatchCtx);
  useEffect(() => {
    dispatch(getTodosData());
  }, []);

  const handleShowAddTodoModal = () => {
    dispatch(addTodoModalShowActions());
  };

  const todos = useSelector((state) => state.allTodos);

  return (
    <>
      <AddTodosForm />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                You're recent To Do
              </h2>
            </div>
            <div className="grid gap-2 grid-cols-2">
              <div>{/* <Filter /> */}</div>
              <div>
                <button
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-700"
                  onClick={handleShowAddTodoModal}
                >
                  Add new
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col">
            {todos.data.map((x) => (
              <div key={x.id}>
                <Card
                  id={x.id}
                  color={x.color}
                  title={x.title}
                  text={x.text}
                  status={x.status}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
