import { useState } from "react";

import useTodos from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import useTheme from "./hooks/useTheme";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo, clearCompleted } =
    useTodos();
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Derived state: calculated on every render, never stored
  const query = search.trim().toLowerCase();

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" ? !todo.completed : todo.completed);
    const matchesSearch = todo.text.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const hasCompleted = todos.some((todo) => todo.completed);

  const emptyMessage =
    todos.length === 0
      ? "No todos yet. Add one above!"
      : "No todos match your search or filter.";

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            Todo App
          </h1>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
        <TodoForm onAdd={addTodo} />
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          hasCompleted={hasCompleted}
          onClearCompleted={clearCompleted}
        />
        <TodoList
          todos={filteredTodos}
          emptyMessage={emptyMessage}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
