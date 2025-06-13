import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0nMBzjrVht-uWK3xuCuyntZAEJadIYB4",
  authDomain: "bad-book-7ff6a.firebaseapp.com",
  projectId: "bad-book-7ff6a",
  storageBucket: "bad-book-7ff6a.firebasestorage.app",
  messagingSenderId: "656336167148",
  appId: "1:656336167148:web:f684a97ba470e036e5c5c9",
  measurementId: "G-B8L8PY3RPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Note operations
export const addNote = async (characterId: string, note: { text: string; createdAt: string }) => {
  try {
    const docRef = await addDoc(collection(db, "notes"), {
      characterId,
      ...note,
    });
    return { id: docRef.id, ...note, characterId };
  } catch (error) {
    console.error("Error adding note: ", error);
    throw error;
  }
};

export const getNotesByCharacter = async (characterId: string) => {
  try {
    const q = query(collection(db, "notes"), where("characterId", "==", characterId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting notes: ", error);
    throw error;
  }
};

export const getAllNotes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "notes"));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting all notes: ", error);
    throw error;
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    await deleteDoc(doc(db, "notes", noteId));
  } catch (error) {
    console.error("Error deleting note: ", error);
    throw error;
  }
}; 