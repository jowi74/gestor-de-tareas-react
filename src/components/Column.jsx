import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function Column({ title, status }) {
  const { tasks } = useTasks();

  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div className="column">
      <h2>{title}</h2>

      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;
