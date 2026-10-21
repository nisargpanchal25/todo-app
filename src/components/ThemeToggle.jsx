function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-lg bg-white p-2 text-xl shadow-sm hover:bg-slate-50 active:scale-95 dark:bg-slate-800 dark:hover:bg-slate-700"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle