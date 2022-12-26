import React from 'react';
import styles from './Header.module.css';
import { filterType } from 'src/types/types';

interface HeaderProps {
  filters: filterType[];
  filter: filterType;
  onFilterChange: (type: 'all' | 'active' | 'completed') => void;
}

function Header({ filters, filter, onFilterChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
