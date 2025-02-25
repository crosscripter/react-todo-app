import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className={styles.TodoItem}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        className={styles.checkBox} 
        onClick={() => toggleTodo(todo.id)} />

      <b style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</b>
      <button className={styles.actionButton} onClick={() => removeTodo(todo.id)}>❌</button>
    </li>
  );
};

export default TodoItem;
