export default function TodoDoneButton(status) {
  return (
    <>
      {status.status == "done" ? (
        <button className="rounded-full bg-cyan-300 hover:bg-white text-cyan-50 font-semibold hover:text-cyan-300 border hover:border-transparent rounded mx-1">
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
        <button className="rounded-full bg-white hover:bg-cyan-300 text-cyan-50 font-semibold hover:text-white border hover:border-transparent rounded mx-1">
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
    </>
  );
}
