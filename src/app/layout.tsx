'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/globals.css';
import ThemeSwitcher from '@/components/ThemeSwitcher'; // <-- import ici

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Provider store={store}>
          <div className="d-flex justify-content-end p-2">
            <ThemeSwitcher /> {/* <-- bouton intégré ici */}
          </div>
          {children}
        </Provider>
      </body>
    </html>
  );
}
