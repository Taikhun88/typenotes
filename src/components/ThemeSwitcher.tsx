'use client';

import { useState, useEffect } from 'react';
import { saveThemeToStorage, loadThemeFromStorage } from '@/utils/localStorage';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const storedTheme = loadThemeFromStorage();
    const initialTheme = storedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    saveThemeToStorage(newTheme);
  };

  return (
    <button className="btn btn-secondary" onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Mode sombre' : '☀️ Mode clair'}
    </button>
  );
}
