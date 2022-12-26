import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

interface DarModeProvider {
  children: JSX.Element | JSX.Element[];
}

export function DarkModeProvider({ children }: DarModeProvider) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }, [darkMode]);

  // NOTE : 기본 브라우저에 다크모드가 되어있는지 확인
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme : dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
