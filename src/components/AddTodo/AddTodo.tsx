import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoType } from 'src/types/types';
import styles from './AddTodo.module.css';

interface AddButtonProps {
  onAdd: (todo: TodoType) => void;
}

function AddTodo({ onAdd }: AddButtonProps) {
  const [text, setText] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (text.trim() === '') return;
      onAdd({ id: uuidv4(), text, status: 'active' });
      setText('');
    },
    [onAdd, text]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name='item'
        type='text'
        placeholder='Add Todo'
        onChange={handleChange}
        value={text}
      />
      <button className={styles.button} type='submit'>
        Add
      </button>
    </form>
  );
}

export default AddTodo;
