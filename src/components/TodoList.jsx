import TodoItem from "./TodoItem";

function TodoList({ todos, emptyMessage, onDelete, onToggle, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="py-10 text-center text-slate-400 dark:text-slate-500">
        <p className="text-4xl">📝</p>
        <p className="mt-2">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
