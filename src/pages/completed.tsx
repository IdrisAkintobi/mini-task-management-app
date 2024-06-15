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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
