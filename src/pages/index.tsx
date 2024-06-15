import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import useTasks from "../hooks/useTasks";
import { Task } from "../models/Task";

const Home: React.FC = () => {
  const { tasks, addTask, editTask, deleteTask, toggleTaskCompletion } =
    useTasks();
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);

  const handleSaveTask = (task: Task) => {
    if (editingTask) {
      editTask(task);
      setEditingTask(undefined);
    } else {
      addTask(task);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>
      <TaskForm task={editingTask} onSave={handleSaveTask} />
      <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={deleteTask}
        onToggleComplete={toggleTaskCompletion}
      />
    </div>
  );
};

export default Home;
