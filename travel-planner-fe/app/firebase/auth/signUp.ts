import firebase_app from '../config';
import {
  createUserWithEmailAndPassword,
  getAuth
} from 'firebase/auth';
import {
  doc,
  getFirestore,
  setDoc
} from 'firebase/firestore';

const auth = getAuth(firebase_app);

export default async function signUp(email: string, password: string, name: string) {
  const db = getFirestore(firebase_app);
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, 'users', result.user.uid);
    await setDoc(docRef, {
        uid: result.user.uid,
        name: name,
        profileImageUrl: "",
        email: email,
        role: 'user',
        userdata: []
    });
  } catch (err) {
    error = err;
  }

  return { result, error };
}
