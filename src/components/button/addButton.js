const AddButton = () => {
  return (
    <div className="text-white bg-gray-800 hover:bg-gray-700 block rounded-full px-3 py-2 font-bold flex">
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
  );
};

export default AddButton;
