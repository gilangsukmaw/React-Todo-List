export default function TodoDeleteButton() {
  return (
    <>
      <button className="rounded-full bg-white hover:bg-red-400 text-red-50 font-semibold hover:text-white border hover:border-transparent rounded mx-1">
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
    </>
  );
}
