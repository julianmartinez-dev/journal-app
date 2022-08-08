import { Action } from "@reduxjs/toolkit"
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { Dispatch } from "react"
import { RootState } from '../store';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers";

interface newNote {
    title: string;
    body: string;
    date: number;
    id?: string;
}

export const startNewNote = () => {
  return async (dispatch: Dispatch<Action>, getState: ()=>RootState) => {
    dispatch(savingNewNote());
    
    const { uid } = getState().auth;
    const newNote: newNote = {
      title: 'my new doc',
      body: 'hello from thunks',
      date: new Date().getTime(),
    };

    const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ));
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
    
  };
};

export const startLoadingnotes = () => {
  return async (dispatch: Dispatch<Action>, getState: ()=>RootState) => {
    const { uid } = getState().auth;
    if(!uid) throw new Error('uid is required');
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes));
  }
}