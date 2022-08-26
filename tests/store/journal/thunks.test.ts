import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";

describe('Pruebas en journal Thunks', () =>{

    const dispatch = jest.fn();
    const getState = jest.fn();
    jest.setTimeout(10000);

    beforeEach(() => jest.clearAllMocks());

    test('startNewNote debe de crear una nota en blanco', async () => {
        const uid = 'TEST-UID'
        getState.mockReturnValue({ auth: { uid: uid } });
        
        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith( addNewEmptyNote({
            body: 'Click here to edit',
            title: 'New Note',
            id: expect.any(String),
            date: expect.any(Number),
            imageUrls: [],
        }) );
        expect(dispatch).toHaveBeenCalledWith(
          setActiveNote({
            body: 'Click here to edit',
            title: 'New Note',
            id: expect.any(String),
            date: expect.any(Number),
            imageUrls: [],
          })
        );

        //Clear firebase
        const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );
        const docs = await getDocs(collectionRef);
        const deletePromises : Promise<void>[] = [];

        docs.forEach( doc => deletePromises.push(deleteDoc(doc.ref)) );
        await Promise.all(deletePromises);
     })
})