import { Note } from '@/store/notesSlice';
import { useState, useEffect } from 'react';

export default function NoteCard({ note }: { note: Note }) {

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date(note.createdAt).toLocaleDateString();
    setFormattedDate(date);
  }, [note.createdAt]);

  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {formattedDate}
        </h6>
        <p className="card-text">{note.content}</p>
      </div>
    </div>
  );
}
