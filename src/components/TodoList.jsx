import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(todo => (
        <TodoItem 
          todo={todo} 
          key={todo.id} 
          toggleTodo={toggleTodo} 
          removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
