// src/app/notes/new/page.tsx
import NoteForm from '@/components/NoteForm';

export default function NewNotePage() {
  return (
    <div className="container mt-4">
      <h1>Nouvelle note</h1>
      <NoteForm />
    </div>
  );
}
