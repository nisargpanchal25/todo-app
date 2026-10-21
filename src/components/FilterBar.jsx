const FILTERS = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "completed", label: "Completed" },
];

function FilterBar({
  filter,
  onFilterChange,
  activeCount,
  hasCompleted,
  onClearCompleted,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
      <span className="text-slate-500 dark:text-slate-400">
        {activeCount} {activeCount === 1 ? "item" : "items"} left
      </span>

      <div className="flex gap-1">
        {FILTERS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onFilterChange(id)}
            className={`rounded-md px-3 py-1 font-medium ${
              filter === id
                ? "bg-indigo-600 text-white"
                : " text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={!hasCompleted}
        className="text-slate-500 hover:text-red-500 dark:text-slate-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-slate-500"
      >
        Clear completed
      </button>
    </div>
  );
}

export default FilterBar;
