import React, { useState } from 'react';
import './styles/App.css';
import TodoList from './components/TodoList/TodoList';
import { filterType } from 'src/types/types';
import Header from 'src/components/Header/Header';

const filters: filterType[] = ['all', 'active', 'completed'];

const App = () => {
  const [filter, setFilter] = useState<filterType>(filters[0]);

  return (
    <div className='App'>
      <div className='backgound'>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </div>
    </div>
  );
};

export default App;
