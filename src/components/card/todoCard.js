import { useState } from "react";
import { useDispatch } from "react-redux";
import { DispatchCtx } from "../../router";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  doneTodo,
  undoneTodo,
} from "../../redux/actions/todo/updateTodoStatusAction";
import { deleteTodo } from "../../redux/actions/todo/deleteTodoAction";

const TodoCard = ({ id, color, title, status }) => {
  const [statusState, setStatusState] = useState(status);

  const dispatch = useDispatch(DispatchCtx);

  const handleDone = () => {
    setStatusState("done");
    toast
      .promise(dispatch(doneTodo(id)), {
        pending: "Updating...",
        success: "Congrats one of your todo is done 🎉",
        error: "Opps something went wrong",
      })
      .catch(() => {
        setStatusState("on-progress");
      });
  };

  const handleUndone = () => {
    setStatusState("on-progress");
    toast
      .promise(dispatch(undoneTodo(id)), {
        pending: "Updating...",
        success: "Got it, todo is undoned 👌",
        error: "Opps something went wrong",
      })
      .catch(() => {
        setStatusState("done");
      });
  };

  const handleDelete = () => {
    toast.promise(dispatch(deleteTodo(id)), {
      pending: "Deleting...",
      success: "Todo deleted 👌",
      error: "Opps something went wrong",
    });
  };

  return (
    <div className="py-2">
      <div className="rounded-lg overflow-hidden shadow-md break-words bg-gray-800">
        <div className="grid grid-cols-12 justify-items-stretch place-items-center">
          <div className="col-span-9 mx-5 py-5">
            {statusState === "done" ? (
              <p className="block text-xl leading-tight font-light text-white line-through">
                {title}
              </p>
            ) : (
              <p className="block text-xl leading-tight font-light text-white">
                {title}
              </p>
            )}
          </div>
          <div className="col-span-3 justify-self-end p-2">
            <div class="grid grid-rows-2 grid-flow-col gap-1">
              <div>
                {statusState === "done" ? (
                  <button
                    onClick={handleUndone}
                    className="rounded-full rounded border border-2 border-cyan-700 bg-cyan-700 text-white hover:text-transparent hover:bg-transparent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-6 h-6 py-1 px-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleDone}
                    className="rounded-full rounded border border-2 border-cyan-700 text-transparent hover:text-white hover:bg-cyan-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-6 h-6 py-1 px-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </button>
                )}
              </div>

              <div>
                <button
                  onClick={handleDelete}
                  className="rounded-full bg-transparent border border-2 border-red-900 hover:bg-red-700 text-red-900 font-semibold hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-6 h-6 py-1 px-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
