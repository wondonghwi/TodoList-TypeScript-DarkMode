import React from 'react';
import TodoListItem from './TodoListItem';
import { TodoType } from './types';

interface TodoListProps {
  todos: TodoType[];
  toggleItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

function TodoList({ todos, toggleItem, deleteItem }: TodoListProps) {
  return (
    <ul className='todoWrapper'>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} toggleItem={toggleItem} deleteItem={deleteItem} />
      ))}
    </ul>
  );
}

export default TodoList;
