import { fireEvent, render } from "@testing-library/react";
import TaskForm from "../components/TaskForm";

test("renders TaskForm and handles form submission", () => {
  const handleSave = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <TaskForm onSave={handleSave} />
  );

  fireEvent.change(getByPlaceholderText(/task title/i), {
    target: { value: "Test Task" },
  });
  fireEvent.change(getByPlaceholderText(/due date/i), {
    target: { value: "2024-12-31" },
  });
  fireEvent.click(getByText(/save task/i));

  expect(handleSave).toHaveBeenCalledWith(
    expect.objectContaining({
      title: "Test Task",
      dueDate: "2024-12-31",
    })
  );
});
