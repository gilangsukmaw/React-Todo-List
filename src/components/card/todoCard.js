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
    toast.promise(dispatch(doneTodo(id)), {
      pending: "Updating...",
      success: "Congrats one of your todo is done 🎉",
      error: "Opps something went wrong",
    });
  };

  const handleUndone = () => {
    setStatusState("on-progress");
    toast.promise(dispatch(undoneTodo(id)), {
      pending: "Updating...",
      success: "Got it, todo is undoned 👌",
      error: "Opps something went wrong",
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
    <div key={id} className="py-2">
      <div className="rounded-lg overflow-hidden shadow-md break-words ">
        <div style={{ backgroundColor: color }}>
          <div className="p-2">
            <div className="grid grid-cols-12">
              <div className="col-span-9">
                {statusState === "done" ? (
                  <p className="block mt-1 text-lg leading-tight font-medium text-black line-through">
                    {title}
                  </p>
                ) : (
                  <p className="block mt-1 text-lg leading-tight font-medium text-black">
                    {title}
                  </p>
                )}
              </div>
              <div className="col-span-3 flex justify-end items-center">
                <div>
                  {statusState === "done" ? (
                    <button
                      onClick={handleUndone}
                      className="rounded-full bg-cyan-300 hover:bg-white text-cyan-50 font-semibold hover:text-cyan-300 border hover:border-transparent rounded mx-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
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
                      className="rounded-full bg-white hover:bg-cyan-300 text-cyan-50 font-semibold hover:text-white border hover:border-transparent rounded mx-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
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
                    className="rounded-full bg-white hover:bg-red-400 text-red-50 font-semibold hover:text-white border hover:border-transparent rounded mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
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
    </div>
  );
};

export default TodoCard;
