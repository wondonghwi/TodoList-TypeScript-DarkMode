import React from 'react';
import { FaRegCheckCircle, FaRegCircle, FaTrash } from 'react-icons/fa';
import { TodoType } from 'src/types/types';

interface TodoListItemProps {
  todo: TodoType;
  // toggleItem: (id: number) => void;
  // deleteItem: (id: number) => void;
}

function TodoListItem({ todo }: TodoListItemProps) {
  const { id, text, status } = todo;
  return (
    <li className='TodoListItem'>
      <div>{status ? <FaRegCheckCircle /> : <FaRegCircle />}</div>
      {/*<div onClick={() => toggleItem(id)}>{status ? <FaRegCheckCircle /> : <FaRegCircle />}</div>*/}
      <span>{text}</span>
      <FaTrash />
      {/*<FaTrash onClick={() => deleteItem(id)} />*/}
    </li>
  );
}

export default TodoListItem;
