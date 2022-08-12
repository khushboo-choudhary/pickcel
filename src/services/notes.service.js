import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const NotesCollectionRef = collection(db, "notes");
class NotesDataService {
  addNotes = (newNotes) => {
    return addDoc(NotesCollectionRef, newNotes);
  };

  updateNotes = (id, updatedNotes) => {
    const notesDoc = doc(db, "notes", id);
    return updateDoc(notesDoc, updatedNotes);
  };

  deleteNotes = (id) => {
    const notesDoc = doc(db, "notes", id);
    return deleteDoc(notesDoc);
  };

  getAllNotess = () => {
    return getDocs(NotesCollectionRef);
  };

  getNotes = (id) => {
    const notesDoc = doc(db, "notes", id);
    return getDoc(notesDoc);
  };
}

export default new NotesDataService();