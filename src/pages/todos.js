import { DispatchCtx } from "../router";
import { useContext, useEffect } from "react";

import Card from "../components/card/todoCard";
import { useSelector } from "react-redux";
import AddTodosForm from "../components/form/addTodos";
import { getTodosData } from "../redux/actions/todo/getTodoAction";
import { addTodoModalShowActions } from "../redux/actions/todo/addTodoModalActions";
import Filter from "../components/dropdown/todoFilter";
import { useParams } from "react-router";

function Todos() {
  const { unique } = useParams();
  const dayjs = require("dayjs");
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  const dispatch = useContext(DispatchCtx);
  useEffect(() => {
    dispatch(getTodosData(unique));
  }, []);

  const handleShowAddTodoModal = () => {
    dispatch(addTodoModalShowActions());
  };

  const todos = useSelector((state) => state.allTodos);

  return (
    <>
      <AddTodosForm unique={unique} />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                You're recent To Do
              </h2>
            </div>

            <div className="grid gap-2 grid-cols-2">
              <div>{/* <Filter /> */}</div>
              <div className="space-y-2 px-2 pt-2 pb-3">
                <div
                  className="text-white bg-indigo-600 hover:bg-indigo-700 block rounded-full px-3 py-2 font-medium flex"
                  onClick={handleShowAddTodoModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <h1 className="mx-1">Add</h1>
                </div>
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
