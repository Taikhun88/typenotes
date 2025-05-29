'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Note } from '@/types/note';
import NoteCard from '@/components/NoteCard';
import NoteForm from '@/components/NoteForm';

// Notes initiales
const initialNotes: Note[] = [
  {
    id: '1',
    title: 'Typescript commands',
    content: 'Voici le contenu de la note...',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Cahier des charges projet',
    content: 'Une autre note très importante.',
    createdAt: new Date().toISOString(),
  },
];

export default function Home() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  const handleAddNote = (note: Note) => {
    setNotes([note, ...notes]);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Mes notes</h1>

      {/* Formulaire d'ajout */}
      <NoteForm onAddNote={handleAddNote} />

      {/* Affichage des notes */}
      <div className="d-flex flex-wrap gap-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}