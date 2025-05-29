// components/NoteCard.tsx
import { Note } from '@/types/note';

type NoteCardProps = {
  note: Note; // ← ici on dit : ce composant attend une prop appelée `note` de type Note
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{new Date(note.createdAt).toLocaleDateString()}</h6>
        <p className="card-text">{note.content}</p>
        <a href="#" className="btn btn-primary">Voir</a>
      </div>
    </div>
  );
}
