import React, { useCallback } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { TodoType } from 'src/types/types';

interface TodoListItemProps {
  todo: TodoType;
  onUpdate: (todo: TodoType) => void;
  onDelete: (todo: TodoType) => void;
}

function TodoListItem({ todo, onUpdate, onDelete }: TodoListItemProps) {
  const { id, text, status } = todo;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target);
      const status = e.target.checked ? 'completed' : 'active';
      onUpdate({ ...todo, status });
    },
    [onUpdate, todo]
  );

  return (
    <li>
      <input type='checkbox' id={id} checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor={id}>{text}</label>
      <button onClick={() => onDelete(todo)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

export default TodoListItem;
