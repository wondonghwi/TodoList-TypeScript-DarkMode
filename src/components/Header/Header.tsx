import React from 'react';
import { filterType } from 'src/types/types';

interface HeaderProps {
  filters: filterType[];
  filter: filterType;
  onFilterChange: (type: 'all' | 'active' | 'completed') => void;
}

function Header({ filters, filter, onFilterChange }: HeaderProps) {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
