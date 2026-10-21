function SearchBar({ value, onChange }) {
  return (
    <input
      aria-label="Search todos"
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search todos..."
      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:ring-indigo-500/30"
    />
  );
}

export default SearchBar;
