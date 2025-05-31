This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more
details.

##Notions dev details

| 🔧 Notion          | 💡 Rôle dans le projet                               |
| ------------------ | ---------------------------------------------------- |
| `useState`         | Gère les champs du formulaire localement             |
| `useReducer`       | Gère l’état global des notes (ajout, suppression)    |
| `dispatch`         | Déclenche une modification de l’état                 |
| `reducer`          | Fonction qui définit comment l’état évolue           |
| `Context API`      | Partage l’état global à tous les composants          |
| `Props`            | Passe les notes entre les composants                 |
| `TypeScript types` | Définit la structure des données (Note, Action)      |
| `uuid`             | Génère un ID unique pour chaque note                 |
| `'use client'`     | Active les hooks côté client dans les fichiers React |

| Option                          | Utilité                                                    |
| ------------------------------- | ---------------------------------------------------------- |
| `"baseUrl": "src"`              | Les imports relatifs commencent à partir du dossier `src/` |
| `"paths": { "@/*": ["./*"] }`   | Permet d'importer par `@/components/...`, `@/context/...`  |
| `"moduleResolution": "bundler"` | Recommandé pour Next 13+ (`app/`) avec `ESM`               |
| `"strict": true`                | Active toutes les vérifications TypeScript strictes        |
| `"jsx": "preserve"`             | Laisse JSX tel quel pour être géré par Next                |
| `"noEmit": true`                | Next.js compile lui-même, on n’a pas besoin d’emit JS      |
