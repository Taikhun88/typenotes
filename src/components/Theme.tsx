'use client';

import { useState, useEffect } from 'react';
import { saveThemeToStorage, loadThemeFromStorage } from '@/utils/localStorage';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>('light');

  // Appliquer le thème dès le chargement du composant
  useEffect(() => {
    const storedTheme = loadThemeFromStorage();
    if (storedTheme) {
      setTheme(storedTheme); // Charger le thème à partir du localStorage
      document.documentElement.setAttribute('data-theme', storedTheme); // Appliquer le thème à la racine
    }
  }, []);

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Appliquer le thème à la racine
    saveThemeToStorage(newTheme); // Sauvegarder le thème dans localStorage
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Passer au mode sombre' : 'Passer au mode clair'}
      </button>
    </div>
  );
}
