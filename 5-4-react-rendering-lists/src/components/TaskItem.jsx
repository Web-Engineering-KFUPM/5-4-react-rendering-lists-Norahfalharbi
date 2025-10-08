import DueBadge from "./DueBadge";


export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <label className="taskMain">
        {/* 🟩 Checkbox: calls onToggle(task.id) when changed */}
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />

        {/* 🟩 Only render DueBadge if task is NOT done */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        {/* Task title */}
        <span className="title">{task.title}</span>
      </label>

      {/* 🟩 Delete button: calls onDelete(task.id) */}
      <button
        className="ghost"
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
      >
        ✕
      </button>
    </li>
  );
}