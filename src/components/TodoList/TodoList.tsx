import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoType } from 'src/types/types';
import TodoListItem from '../TodoListItem/TodoListItem';
import AddTodo from 'src/components/AddTodo/AddTodo';

interface TodoListProps {}

function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: uuidv4(),
      text: '공부하기',
      status: 'active',
    },
    {
      id: uuidv4(),
      text: '저녁먹기',
      status: 'unActive',
    },
  ]);

  const onAdd = useCallback(
    (todo: TodoType) => {
      setTodos([...todos, todo]);
    },
    [todos]
  );

  return (
    <>
      <ul className='todoWrapper'>
        {todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
          // <TodoListItem key={todo.id} todo={todo} toggleItem={toggleItem} deleteItem={deleteItem} />
        ))}
      </ul>
      <AddTodo onAdd={onAdd} />
    </>
  );
}

export default TodoList;
