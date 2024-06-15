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

  const { getAllByText } = render(
    <TaskList
      tasks={tasks}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onToggleComplete={handleToggleComplete}
    />
  );

  const deleteButtons = getAllByText(/Delete/i, { selector: "button" });
  fireEvent.click(deleteButtons[0]);
  expect(handleDelete).toHaveBeenCalledWith(tasks[0].id);

  const editButtons = getAllByText(/Edit/i, { selector: "button" });
  fireEvent.click(editButtons[0]);
  expect(handleEdit).toHaveBeenCalledWith(tasks[0]);

  const unmarkButtons = getAllByText(/Unmark/i, { selector: "button" });
  fireEvent.click(unmarkButtons[0]);
  expect(handleToggleComplete).toHaveBeenCalledWith(tasks[1].id);

  const completeButtons = getAllByText(/Complete/i, { selector: "button" });
  fireEvent.click(completeButtons[0]);
  expect(handleToggleComplete).toHaveBeenCalledWith(tasks[0].id);
});
