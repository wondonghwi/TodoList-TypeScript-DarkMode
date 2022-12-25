import React, { useCallback, useEffect, useState } from 'react';
import './styles/App.css';
import AddButton from './components/AddButton';
import TodoList from './components/TodoList';
import TopNavigation from './components/TopNavigation';
import { TodoType } from './components/types';

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      title: '공부하기',
      checked: true,
    },
    {
      id: 2,
      title: '저녁먹기',
      checked: false,
    },
  ]);
  const [tab, setTab] = useState<'All' | 'Active' | 'Completed'>('All');
  const [filtedTodo, setFiltedTodo] = useState<TodoType[]>([]);

  const addItem = useCallback(
    (event: React.FormEvent, text: string) => {
      event.preventDefault();

      setTodos(
        todos.concat({
          id: Date.now(),
          title: text,
          checked: false,
        })
      );
    },
    [setTodos, todos]
  );

  const toggleItem = useCallback(
    (id: number) => {
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    },
    [todos]
  );

  const deleteItem = useCallback(
    (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  const clickTab = useCallback(
    (type: 'All' | 'Active' | 'Completed') => {
      switch (type) {
        case 'All': {
          setTab('All');
          setFiltedTodo(todos);
          break;
        }
        case 'Active': {
          setTab('Active');

          setFiltedTodo(todos.filter(todo => !todo.checked));
          break;
        }
        case 'Completed': {
          setTab('Completed');

          setFiltedTodo(todos.filter(todo => todo.checked));
          break;
        }
      }
    },
    [todos]
  );

  useEffect(() => {
    clickTab('All');
  }, [clickTab]);

  return (
    <div className='App'>
      <div className='backgound'>
        <TopNavigation clickTab={clickTab} tab={tab} />
        <TodoList todos={filtedTodo} toggleItem={toggleItem} deleteItem={deleteItem} />
        <AddButton addItem={addItem} />
      </div>
    </div>
  );
};

export default App;
