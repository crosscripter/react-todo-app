import { vi, expect, test, describe } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem Tests', () => {

  const mockTodo = { id: Number(new Date()), text: 'Test Item', completed: false };
  const mockRemoveTodo = vi.fn();
  const mockToggleTodo = vi.fn();

  test('Renders todo text', () => {
    const { getByText } = render(
      <TodoItem 
        todo={mockTodo} 
        removeTodo={mockRemoveTodo} 
        toggleTodo={mockToggleTodo} />
    );

    expect(getByText(mockTodo.text)).toBeDefined();
  });

  test('Items are toggled when checking the box', () => {
    const { getByRole } = render(
      <TodoItem 
        todo={mockTodo} 
        removeTodo={mockRemoveTodo} 
        toggleTodo={mockToggleTodo} />
    );
  
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockToggleTodo).toHaveBeenCalledOnce();
  });
});
