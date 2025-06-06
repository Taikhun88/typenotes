// src/utils/localStorage.ts

export const saveThemeToStorage = (theme: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);  // Enregistrer le thème
  }
};

export const loadThemeFromStorage = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme');  // Récupérer le thème
  }
  return null;
};
