import React, { useCallback, useState } from 'react';
import { TodoType } from 'src/types/types';
import TodoListItem from '../TodoListItem/TodoListItem';
import AddTodo from 'src/components/AddTodo/AddTodo';

interface TodoListProps {}

function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      text: '공부하기',
      status: 'active',
    },
    {
      id: 2,
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
