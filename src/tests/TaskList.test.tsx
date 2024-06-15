import { fireEvent, render } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { Task } from "../models/Task";

const tasks: Task[] = [
  { id: "1", title: "Task 1", dueDate: "2024-12-31", completed: false },
  { id: "2", title: "Task 2", dueDate: "2024-11-30", completed: true },
];

test("renders TaskList and handles actions", () => {
  const handleEdit = jest.fn();
  const handleDelete = jest.fn();
  const handleToggleComplete = jest.fn();

  const { getByText } = render(
    <TaskList
      tasks={tasks}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onToggleComplete={handleToggleComplete}
    />
  );

  fireEvent.click(getByText(/edit/i, { selector: "button" }));
  expect(handleEdit).toHaveBeenCalledWith(tasks[0]);

  fireEvent.click(getByText(/delete/i, { selector: "button" }));
  expect(handleDelete).toHaveBeenCalledWith(tasks[0].id);

  fireEvent.click(getByText(/complete/i, { selector: "button" }));
  expect(handleToggleComplete).toHaveBeenCalledWith(tasks[0].id);

  fireEvent.click(getByText(/unmark/i, { selector: "button" }));
  expect(handleToggleComplete).toHaveBeenCalledWith(tasks[1].id);
});
