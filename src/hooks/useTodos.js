import { useState } from 'react';

export function useTodos() {

  const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, setTodos] = useState(loadTodos);

  const saveTodos = todos => {
    setTodos(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = text => saveTodos([
    ...todos, 
    { id: Number(new Date()), text, completed: false }
  ]);

  const toggleTodo = todoId => {
    saveTodos(todos.map(todo => {
      if (todo.id === todoId) 
        todo.completed = !todo.completed;
      return todo;
    }));
  };

  const removeTodo = todoId => {
    const index = todos.findIndex(({ id }) => id === todoId);
    delete todos[index];
    const newTodos = todos.filter(Boolean);
    saveTodos(newTodos);
  };

  return { todos, addTodo, toggleTodo, removeTodo };
}