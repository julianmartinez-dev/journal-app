import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase";

interface INotes {
    id: string,
    title: string,
    body: string,
    date: number,
}

export const loadNotes = async (uid: string):Promise<INotes[] | INotes> => {
    if(!uid) throw new Error('uid is required');

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const notes:Array<INotes> = [];
    docs.forEach( doc => {
        const { title, body, date } = doc.data();
        notes.push({
            id: doc.id,
            title,
            body,
            date,
        })
    })
    console.log(notes);
    return notes;
}