import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface INote {
  id: string;
  title: string;
  body: string;
  date: number;
  imageUrls: string[];
}

interface journalState {
  isSaving: boolean;
  messageSaved: string;
  notes: INote[];
  active: INote | null;
}

const initialState: journalState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote(state) {
        state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
        state.notes.push( action.payload );
        state.isSaving = false;
    },
    setActiveNote: (state, action) => {
        state.active = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote,
} = journalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.journal.value

export default journalSlice.reducer;
