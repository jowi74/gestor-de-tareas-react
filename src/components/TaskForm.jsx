import useForm from "../hooks/useForm";
import { useTasks } from "../context/TaskContext";

function TaskForm({ author }) {
  const { addTask } = useTasks();

  const { values, handleChange, resetForm } = useForm({
    title: "",
    description: "",
    priority: "Media"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      id: Date.now(),
      title: values.title,
      description: values.description,
      priority: values.priority,
      status: "todo",
      author: author
    });

    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={values.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Descripción"
        value={values.description}
        onChange={handleChange}
      />

      <select
        name="priority"
        value={values.priority}
        onChange={handleChange}
      >
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>

      <button type="submit">Añadir tarea</button>
    </form>
  );
}

export default TaskForm;
