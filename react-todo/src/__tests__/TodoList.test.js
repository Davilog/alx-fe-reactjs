import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('can toggle todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    const todoItem = screen.getByText('Learn React');

    fireEvent.click(deleteButtons[0]);
    expect(todoItem).not.toBeInTheDocument();
  });

  test('prevents adding empty todos', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);

    const todoItems = screen.getAllByText(/Delete/);
    expect(todoItems).toHaveLength(3);
  });
});