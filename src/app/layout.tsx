'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadThemeFromStorage, saveThemeToStorage } from '@/utils/localStorage';
import '@/app/globals.css'; 

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = loadThemeFromStorage();
    const initialTheme = storedTheme || 'light';
    setTheme(initialTheme);
    document.body.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    saveThemeToStorage(newTheme);
  };

  return (
    <html lang="fr">
      <body>
        <Provider store={store}>
          <div className="d-flex justify-content-end p-2">
            <button className="btn btn-secondary" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Mode sombre' : '☀️ Mode clair'}
            </button>
          </div>
          {children}
        </Provider>
      </body>
    </html>
  );
}
