import React, { useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { filterType, TodoType } from 'src/types/types';
import TodoListItem from '../TodoListItem/TodoListItem';
import AddTodo from 'src/components/AddTodo/AddTodo';

interface TodoListProps {
  filter: filterType;
}

function TodoList({ filter }: TodoListProps) {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: uuidv4(),
      text: '공부하기',
      status: 'active',
    },
    {
      id: uuidv4(),
      text: '저녁먹기',
      status: 'completed',
    },
  ]);

  const handleAdd = useCallback(
    (todo: TodoType) => {
      setTodos([...todos, todo]);
    },
    [todos]
  );

  const handleUpdate = useCallback(
    (todo: TodoType) => {
      setTodos(todos.map(item => (item.id === todo.id ? todo : item)));
    },
    [todos]
  );

  const handleDelete = useCallback(
    (todo: TodoType) => {
      setTodos(todos.filter(item => item.id !== todo.id));
    },
    [todos]
  );

  const filteredTodos = useMemo(() => {
    if (filter === 'all') return todos;
    return todos.filter(todo => todo.status === filter);
  }, [filter, todos]);

  return (
    <>
      <ul>
        {filteredTodos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}

export default TodoList;
