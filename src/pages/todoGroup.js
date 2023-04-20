import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DispatchCtx } from "../router";
import { getTodoGroupsData } from "../redux/actions/todo/getTodoGroupsActions";
import { addTodoGroupsModalShowActions } from "../redux/actions/todo/addTodoGroupsModalActions";
import AddTodosGroupsForm from "../components/form/addTodoGroups";
import AddButton from "../components/button/addButton";

function TodosGroup() {
  let navigate = useNavigate();

  const dispatch = useContext(DispatchCtx);
  useEffect(() => {
    dispatch(getTodoGroupsData());
  }, []);

  const handleShowAddTodoModal = () => {
    dispatch(addTodoGroupsModalShowActions());
  };

  const todoGroups = useSelector((state) => state.allTodoGroup);

  return (
    <>
      <AddTodosGroupsForm />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Categories
          </h2>

          <div className="grid gap-2 grid-cols-2">
            <div>{/* <Filter /> */}</div>
            <div className="space-y-2 px-2 pt-2 pb-3">
              <AddButton />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {todoGroups.data.map((x) => (
            <div
              key={x.id}
              className="group relative"
              onClick={() => {
                navigate(`/todo/${x.unique_name}`);
                window.location.reload();
              }}
            >
              <div className="h-40 bg-gray-800 text-white aspect-w-1 overflow-hidden rounded-md lg:aspect-none lg:h-30 break-words shadow-md ">
                <div className="grid grid-cols-1 gap-y-1 p-5 h-56">
                  <div className="h-5">
                    <h2 className="text-lg font-bold tracking-tight">
                      {x.title}
                    </h2>
                  </div>

                  <div className="">
                    <h2 className="text-sm font-light text-gray-400 tracking-tight">
                      {x.todo_done}/{x.todo_total} tasks completed
                    </h2>
                    <div class="h-1 w-full bg-gray-700 rounded-full">
                      <div
                        class="h-1 bg-indigo-600 rounded-full"
                        style={{ width: `${x.todo_done_percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TodosGroup;
