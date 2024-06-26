import { Task } from "../models/Task";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onToggleComplete: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  return (
    <ul className="space-y-4 mt-12">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center p-4 bg-white shadow rounded"
        >
          <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>
            {task.title} - {task.dueDate}
          </span>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(task)}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => onToggleComplete(task.id)}
              className={`px-4 py-2 text-white rounded ${
                task.completed
                  ? "bg-gray-500 hover:bg-gray-700"
                  : "bg-green-500 hover:bg-green-700"
              }`}
            >
              {task.completed ? "Unmark" : "Complete"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
