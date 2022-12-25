import React from 'react';
import { FaRegCheckCircle, FaRegCircle, FaTrash } from 'react-icons/fa';
import { TodoType } from './types';

interface TodoListItemProps {
  todo: TodoType;
  toggleItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

function TodoListItem({ todo, toggleItem, deleteItem }: TodoListItemProps) {
  const { id, title, checked } = todo;
  return (
    <li className='TodoListItem'>
      <div onClick={() => toggleItem(id)}>{checked ? <FaRegCheckCircle /> : <FaRegCircle />}</div>
      <span>{title}</span>
      <FaTrash onClick={() => deleteItem(id)} />
    </li>
  );
}

export default TodoListItem;
