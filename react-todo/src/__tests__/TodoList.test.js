import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    // Initially not completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    // Click to toggle
    fireEvent.click(todoItem);

    // Should now be completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    const todoItem = screen.getByText('Learn React');

    // Click delete button for first todo
    fireEvent.click(deleteButtons[0]);

    // Todo should be removed
    expect(todoItem).not.toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);

    // Should still have only 3 initial todos
    const todoItems = screen.getAllByText(/Delete/);
    expect(todoItems).toHaveLength(3);
  });
});