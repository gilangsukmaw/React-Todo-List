const FilterButton = ({ name, active }) => {
  return (
    <div className="block p-2 text-sm flex flex-row">
      <div>
        {active ? (
          <button className="rounded-full bg-indigo-600 hover:bg-white border-2 p-2"></button>
        ) : (
          <button className="rounded-full bg-white border-2 p-2 hover:bg-indigo-600"></button>
        )}
      </div>
      <div className="mx-2 my-1">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default FilterButton;
