'use client';

import { useAppSelector } from '@/store/hooks';
import NoteCard from '@/components/NoteCard';
import Link from 'next/link';

export default function NotesPage() {
  const notes = useAppSelector(state => state.notes);

  return (
    <div className="container mt-4">
      <h1>Mes notes</h1>
      <Link href="/notes/new" className="btn btn-success mb-3">
        Ajouter une note
      </Link>
      <div className="row">
        {notes.map(note => (
          <div className="col-md-4" key={note.id}>
            <NoteCard note={note} />
          </div>
        ))}
      </div>
    </div>
  );
}
