import TodoDeleteButton from "../button/todoDeleteButton";
import TodoDoneButton from "../button/todoDoneButton";

export default function TodoCard({ id, color, title, status }) {
  return (
    <div key={id} className="py-2">
      <div className="rounded-xl shadow-md overflow-hidden">
        <div style={{ backgroundColor: color }}>
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div>
                {status == "done" ? (
                  <h1 className="block mt-1 text-lg leading-tight font-medium text-black line-through">
                    {title}
                  </h1>
                ) : (
                  <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
                    {title}
                  </h1>
                )}
              </div>
              <div>
                <TodoDoneButton status={status} />
                <TodoDeleteButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
