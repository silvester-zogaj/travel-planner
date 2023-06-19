import { FirebaseError } from "firebase/app";
import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const auth = getAuth(firebase_app);

export default async function signUp(
  email: string,
  password: string,
  name: string
) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const db = getFirestore(firebase_app);
    const docRef = doc(db, "users", result.user.uid);
    await setDoc(docRef, {
      uid: result.user.uid,
      name: name,
      profileImageUrl: "",
      email: email,
      role: "user",
      userdata: [],
    });
    return { error: null, result };
  } catch (err) {
    const firebaseError = err as FirebaseError;
    return { error: firebaseError, result: null };
  }
}
