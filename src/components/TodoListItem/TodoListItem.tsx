import React, { useCallback } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { TodoType } from 'src/types/types';
import styles from './TodoListItem.module.css';

interface TodoListItemProps {
  todo: TodoType;
  onUpdate: (todo: TodoType) => void;
  onDelete: (todo: TodoType) => void;
}

function TodoListItem({ todo, onUpdate, onDelete }: TodoListItemProps) {
  const { id, text, status } = todo;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const status = e.target.checked ? 'completed' : 'active';
      onUpdate({ ...todo, status });
    },
    [onUpdate, todo]
  );

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={() => onDelete(todo)}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}

export default TodoListItem;
