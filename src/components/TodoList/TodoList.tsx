import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { filterType, TodoType } from 'src/types/types';
import TodoListItem from '../TodoListItem/TodoListItem';
import AddTodo from 'src/components/AddTodo/AddTodo';
import styles from './TodoList.module.css';

interface TodoListProps {
  filter: filterType;
}

function TodoList({ filter }: TodoListProps) {
  // NOTE : 초기값을 함수로 놓아서 함수가 마운트될때 딱한번만 호출되도록 한다.
  // -> 콜백함수를 전달하기때문
  const [todos, setTodos] = useState<TodoType[]>(() => readTodosLocalStorage());

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

export default TodoList;

const readTodosLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};
