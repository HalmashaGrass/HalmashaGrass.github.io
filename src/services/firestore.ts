import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  DocumentData,
  WhereFilterOp,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "halmashagrass-website.firebaseapp.com",
  databaseURL: "https://halmashagrass-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "halmashagrass-website",
  storageBucket: "halmashagrass-website.appspot.com",
  messagingSenderId: "478062465575",
  appId: "1:478062465575:web:7217278b50e0b6ebd17402",
  measurementId: "G-D0F8ML1YDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firestore helper functions

/**
 * Add a new document to a collection
 * @param collectionName The name of the collection
 * @param data The data to be added
 * @returns The ID of the newly created document
 */
export const addDocument = async (collectionName: string, data: DocumentData): Promise<string> => {
  const collectionRef = collection(db, collectionName);
  const docRef = doc(collectionRef);
  await setDoc(docRef, data);
  return docRef.id;
};

/**
 * Get a document from a collection
 * @param collectionName The name of the collection
 * @param docId The ID of the document
 * @returns The document data or null if it doesn't exist
 */
export const getDocument = async (collectionName: string, docId: string): Promise<DocumentData | null> => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

/**
 * Update a document in a collection
 * @param collectionName The name of the collection
 * @param docId The ID of the document
 * @param data The data to update
 */
export const updateDocument = async (collectionName: string, docId: string, data: DocumentData): Promise<void> => {
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, data);
};

/**
 * Delete a document from a collection
 * @param collectionName The name of the collection
 * @param docId The ID of the document
 */
export const deleteDocument = async (collectionName: string, docId: string): Promise<void> => {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
};

/**
 * Query documents in a collection
 * @param collectionName The name of the collection
 * @param field The field to query
 * @param operator The query operator (e.g., '==', '>', '<', '>=', '<=')
 * @param value The value to compare against
 * @returns An array of documents that match the query
 */
export const queryDocuments = async (
  collectionName: string,
  field: string,
  operator: WhereFilterOp,
  value: any
): Promise<DocumentData[]> => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where(field, operator, value));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/**
 * Get all documents from a collection
 * @param collectionName The name of the collection
 * @returns An array of all documents in the collection
 */
export const getAllDocuments = async (collectionName: string): Promise<DocumentData[]> => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Example usage
export const exampleUsage = async () => {
  try {
    // Add a document
    const docId = await addDocument('users', { name: 'John Doe', age: 30 });
    console.log('Added document with ID:', docId);

    // Get a document
    const userData = await getDocument('users', docId);
    console.log('User data:', userData);

    // Update a document
    await updateDocument('users', docId, { age: 31 });
    console.log('Document updated');

    // Query documents
    const results = await queryDocuments('users', 'age', '>', 25);
    console.log('Query results:', results);

    // Get all documents
    const allUsers = await getAllDocuments('users');
    console.log('All users:', allUsers);

    // Delete a document
    await deleteDocument('users', docId);
    console.log('Document deleted');
  } catch (error) {
    console.error('Error:', error);
  }
};