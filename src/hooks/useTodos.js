import { useState } from 'react';

export function useTodos() {

  const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    console.log('loadTodos', storedTodos);
    const loadedTodos = storedTodos ? JSON.parse(storedTodos) : [];
    console.log('loadTodos', storedTodos, loadedTodos);
    return loadedTodos;
  };

  const [todos, setTodos] = useState(loadTodos);

  const saveTodos = todos => {
    setTodos(todos);
    console.log('saveTodos', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = text => {
    const newTodo = { id: Number(new Date()), text, completed: false };
    console.log('addTodo', text, newTodo);
    saveTodos([...todos, newTodo]);
  };

  const toggleTodo = todoId => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
        console.log('toggleTodo', todoId, todo);
      }
      return todo;
    });

    console.log('toggleTodo', newTodos);
    saveTodos(newTodos);
  };

  const removeTodo = todoId => {
    const index = todos.findIndex(({ id }) => id === todoId);
    delete todos[index];
    const newTodos = todos.filter(Boolean);
    console.log('removeTodo', index, newTodos);
    saveTodos(newTodos);
  };

  return { todos, addTodo, toggleTodo, removeTodo };
}
