import React from 'react';
import styles from './Header.module.css';
import { filterType } from 'src/types/types';
import { useDarkMode } from 'src/context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

interface HeaderProps {
  filters: filterType[];
  filter: filterType;
  onFilterChange: (type: 'all' | 'active' | 'completed') => void;
}

function Header({ filters, filter, onFilterChange }: HeaderProps) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode ? <HiMoon /> : <HiSun />}
      </button>
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
