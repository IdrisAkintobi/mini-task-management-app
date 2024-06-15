import { useEffect, useState } from "react";
import { Task } from "../models/Task";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task: Task) => setTasks([...tasks, task]);
  const editTask = (updatedTask: Task) =>
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  const deleteTask = (taskId: string) =>
    setTasks(tasks.filter((task) => task.id !== taskId));
  const toggleTaskCompletion = (taskId: string) =>
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );

  return { tasks, addTask, editTask, deleteTask, toggleTaskCompletion };
};

export default useTasks;
