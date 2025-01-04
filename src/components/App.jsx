import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { useTodos } from '../hooks/useTodos';
import styles from './App.module.css';

const App = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <div className={styles.App}> 
      <h1>Todos</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
