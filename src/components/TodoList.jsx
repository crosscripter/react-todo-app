import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
