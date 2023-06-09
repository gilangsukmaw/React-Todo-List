import { DispatchCtx } from "../router";
import { useContext, useEffect } from "react";

import Card from "../components/card/todoCard";
import { useSelector } from "react-redux";
import AddTodosForm from "../components/form/addTodos";
import { getTodosData } from "../redux/actions/todo/getTodoAction";
import { addTodoModalShowActions } from "../redux/actions/todo/addTodoModalActions";
import Filter from "../components/dropdown/todoFilter";
import { useParams } from "react-router";
import AddButton from "../components/button/addButton";
import logo from "../logo.svg";

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
      {todos.loading ? (
        <div class="h-screen grid grid-cols-1 content-center text-white">
          <div className="place-self-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      ) : (
        <>
          <AddTodosForm unique={unique} />

          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Task list
                </h2>
              </div>

              <div className="grid gap-2 grid-cols-2">
                <div>{/* <Filter /> */}</div>
                <div className="space-y-2 px-2 pt-2 pb-3">
                  <div onClick={handleShowAddTodoModal}>
                    <AddButton />
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
        </>
      )}
    </>
  );
}

export default Todos;
