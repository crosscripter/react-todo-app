import { vi, expect, test, describe } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Tests', () => {
  const mockTodos = [
    { id: Number(new Date()), text: 'Test Item', completed: false },
    { id: Number(new Date()), text: 'Test Item 2', completed: true }
  ];

  const mockRemoveTodo = vi.fn();
  const mockToggleTodo = vi.fn();

  test('Renders todos', () => {
    const { getByText } = render(
      <TodoList 
        todos={mockTodos} 
        toggleTodo={mockToggleTodo} 
        removeTodo={mockRemoveTodo} />
    );

    expect(getByText(mockTodos[0].text)).toBeDefined();
    expect(getByText(mockTodos[1].text)).toBeDefined();
  });

  test('Items are toggled when checking the box', () => {
    const { getAllByRole } = render(
      <TodoList 
        todos={mockTodos} 
        toggleTodo={mockToggleTodo} 
        removeTodo={mockRemoveTodo} />
    );

    const checkboxes = getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[1]);
    expect(mockToggleTodo).toHaveBeenCalledTimes(2);
  });

});
