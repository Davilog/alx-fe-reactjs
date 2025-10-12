import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList', () => {
  render(<TodoList />);
});

test('adds todo', () => {
  render(<TodoList />);
  const input = screen.getByRole('textbox');
  const button = screen.getByText('Add');
  
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(button);
  
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('deletes todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
});

test('toggles todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);
});