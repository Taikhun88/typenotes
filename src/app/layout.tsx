'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
