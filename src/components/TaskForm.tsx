import { useEffect, useState } from "react";
import { Task } from "../models/Task";

interface TaskFormProps {
  task?: Task | null;
  onSave: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSave }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [dueDate, setDueDate] = useState(task?.dueDate || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = task
      ? { ...task, title, dueDate }
      : { id: String(Date.now()), title, dueDate, completed: false };
    onSave(newTask);
    setTitle("");
    setDueDate("");
  };

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDueDate(task.dueDate);
    }
  }, [task]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
