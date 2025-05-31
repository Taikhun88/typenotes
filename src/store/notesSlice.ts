// src/store/notesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

const initialState: Note[] = [
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

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
