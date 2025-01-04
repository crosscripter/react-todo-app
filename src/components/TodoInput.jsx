import React, { useState } from 'react';
import styles from './TodoInput.module.css';

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        className={styles.TodoInput}
        onChange={e => setInputValue(e.target.value)}
        placeholder="I need to..."
      />
      <button 
        className={styles.addButton} 
        type="submit" 
        disabled={inputValue.length === 0}>+</button>
    </form>
  );
};

export default TodoInput;