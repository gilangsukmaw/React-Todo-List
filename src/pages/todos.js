import { DispatchCtx } from "../router";
import { useContext, useEffect } from "react";

import Card from "../components/card/todoCard";
import { useSelector } from "react-redux";
import AddTodosForm from "../components/form/addTodos";
import { getTodosData } from "../redux/actions/todo/getTodoAction";
import { addTodoModalShowActions } from "../redux/actions/todo/addTodoModalActions";

function Todos() {
  const dispatch = useContext(DispatchCtx);
  useEffect(() => {
    dispatch(getTodosData());
  }, []);

  const handleShowAddTodoModal = () => {
    dispatch(addTodoModalShowActions());
  };

  const todos = useSelector((state) => state.allTodos);

  // const todo = [
  //   {
  //     id: 1,
  //     color: "bg-pink-100",
  //     title: "Meet Tom at the Station",
  //     status: true,
  //   },
  //   {
  //     id: 2,
  //     color: "bg-orange-100",
  //     title: "Meet Hana at cafe",
  //     status: false,
  //   },
  //   {
  //     id: 3,
  //     color: "bg-teal-100",
  //     title: "Buy Groceries",
  //     status: false,
  //   },
  //   {
  //     id: 4,
  //     color: "bg-lime-100",
  //     title: "Feed the cat",
  //     status: false,
  //   },
  //   {
  //     id: 5,
  //     color: "bg-red-100",
  //     title: "Prepare for the meet",
  //     status: false,
  //   },
  //   {
  //     id: 6,
  //     color: "bg-blue-100",
  //     title: "Dinner wih Sarah",
  //     status: false,
  //   },
  //   // More products...
  // ];

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
            <div>
              <button
                className="bg-cyan-300 hover:bg-cyan-400 text-cyan-50 border-cyan-200 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
                onClick={handleShowAddTodoModal}
              >
                Add new
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col">
            {todos.data.map((x) => (
              <Card
                key={x.id}
                id={x.id}
                color={x.color}
                title={x.title}
                text={x.text}
                status={x.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
