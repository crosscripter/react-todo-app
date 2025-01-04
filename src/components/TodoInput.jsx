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
        placeholder="I need to..."
        className={styles.TodoInput}
        onChange={e => setInputValue(e.target.value)}
      />
      <button 
        type="submit" 
        className={styles.addButton} 
        disabled={inputValue.length === 0}>+</button>
    </form>
  );
};

export default TodoInput;
