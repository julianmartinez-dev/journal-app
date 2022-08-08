import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface INote {
  id: string;
  title: string;
  body: string;
  date: number;
  imageUrls: string[];
}

// Define a type for the slice state
interface journalState {
  isSaving: boolean;
  messageSaved: string;
  notes: INote[];
  active: INote | null;
}

// Define the initial state using that type
const initialState: journalState = {
  isSaving: true,
  messageSaved: '',
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: 'journal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
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
} = journalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.journal.value

export default journalSlice.reducer;
