import { useState } from "react";

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const startEditing = () => {
    setEditText(todo.text);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const saveEdit = () => {
    const trimmed = editText.trim();
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEditing();
  };

  return (
    <li className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm dark:bg-slate-800">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 cursor-pointer accent-indigo-600"
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 rounded border border-indigo-400 bg-white px-2 py-1 text-slate-900 outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-indigo-500/30"
          />
          <button
            onClick={saveEdit}
            className="rounded px-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-slate-700"
          >
            Save
          </button>
          <button
            onClick={cancelEditing}
            className="rounded px-2 text-sm text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            onDoubleClick={startEditing}
            className={`flex-1 ${
              todo.completed
                ? "text-slate-400 line-through dark:text-slate-500"
                : "text-slate-800 dark:text-slate-100"
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={startEditing}
            className="rounded px-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="rounded px-2 text-slate-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950"
            aria-label="Delete todo"
          >
            ✕
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
