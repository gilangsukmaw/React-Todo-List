import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DispatchCtx } from "../router";
import { getTodoGroupsData } from "../redux/actions/todo/getTodoGroupsActions";
import { addTodoGroupsModalShowActions } from "../redux/actions/todo/addTodoGroupsModalActions";
import AddTodosGroupsForm from "../components/form/addTodoGroups";

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
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Todo Group
            </h2>

            <div className="grid gap-2 grid-cols-2">
              <div>{/* <Filter /> */}</div>
              <div className="space-y-2 px-2 pt-2 pb-3">
                <div
                  className="text-white bg-indigo-600 hover:bg-indigo-700 block rounded-full px-3 py-2 font-bold flex"
                  onClick={handleShowAddTodoModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
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
                <div className="h-40 bg-white aspect-w-1 overflow-hidden rounded-md lg:aspect-none lg:h-30 break-words border shadow-md ">
                  <div className="h-40 grid grid-cols-1 p-5 gap-y-3 content-between">
                    <div>
                      <h2 className="text-xl font-bold tracking-tight text-gray-900">
                        {x.title}
                      </h2>
                    </div>

                    <div>
                      <h2 className="text-3xl font-light tracking-tight text-gray-900">
                        {x.todo_total} todos
                      </h2>
                    </div>

                    <div>
                      <p>{x.created_at}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodosGroup;
