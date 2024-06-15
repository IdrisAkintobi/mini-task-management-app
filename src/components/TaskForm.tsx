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
    <form onSubmit={handleSubmit} className="max-w-sm space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
        className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Due Date"
        required
        className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
