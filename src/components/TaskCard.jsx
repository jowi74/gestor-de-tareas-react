import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, moveTask } = useTasks();

  return (
    <div className={`task-card priority-${task.priority.toLowerCase()}`}>
      <h3>{task.title}</h3>
      <p>Prioridad: {task.priority}</p>

      <div>
        <button onClick={() => deleteTask(task.id)}>🗑️</button>

        {task.status !== "todo" && (
          <button onClick={() => moveTask(task.id, "todo")}>⬅️</button>
        )}

        {task.status !== "done" && (
          <button
            onClick={() =>
              moveTask(
                task.id,
                task.status === "todo" ? "progress" : "done"
              )
            }
          >
            ➡️
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
