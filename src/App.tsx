import React, { useCallback, useEffect, useState } from 'react';
import './styles/App.css';
import AddTodo from 'src/components/AddTodo/AddTodo';
import TopNavigation from './components/TopNavigation';
import { TodoType } from 'src/types/types';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  /* const [tab, setTab] = useState<'All' | 'Active' | 'Completed'>('All');
  const [filtedTodo, setFiltedTodo] = useState<TodoType[]>([]);

  const toggleItem = useCallback(
    (id: number) => {
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, status: !todo.status } : todo)));
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

          setFiltedTodo(todos.filter(todo => !todo.status));
          break;
        }
        case 'Completed': {
          setTab('Completed');

          setFiltedTodo(todos.filter(todo => todo.status));
          break;
        }
      }
    },
    [todos]
  );

  useEffect(() => {
    clickTab('All');
  }, [clickTab]);*/

  return (
    <div className='App'>
      <div className='backgound'>
        {/*<TopNavigation clickTab={clickTab} tab={tab} />*/}
        <TodoList />
        {/*<TodoList todos={filtedTodo} toggleItem={toggleItem} deleteItem={deleteItem} />*/}
        {/*<AddTodo addItem={addItem} />*/}
      </div>
    </div>
  );
};

export default App;
