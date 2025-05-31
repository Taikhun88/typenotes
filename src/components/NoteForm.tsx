// src/components/NoteForm.tsx
'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { addNote } from '@/store/notesSlice';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function NoteForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNote = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    dispatch(addNote(newNote));
    router.push('/notes'); // redirection
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Titre</label>
        <input
          id="title"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">Contenu</label>
        <textarea
          id="content"
          className="form-control"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Créer</button>
    </form>
  );
}
