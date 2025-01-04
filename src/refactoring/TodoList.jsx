import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {

  // Improvement: handleToggle could be handled inline within toggleTodo prop instead
  const handleToggle = id => toggleTodo(id);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={handleToggle} />
      ))}
    </div>
  );
};

export default TodoList;
