import useTasks from "../hooks/useTasks";

const CompletedTasks: React.FC = () => {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
      <ul className="space-y-4">
        {completedTasks.map((task) => (
          <li key={task.id} className="p-4 bg-white shadow rounded">
            {task.title} - {task.dueDate}
            {/* Add a checkmark icon to indicate completed tasks */}
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
