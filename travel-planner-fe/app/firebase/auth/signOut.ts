import { FirebaseError } from "firebase/app";
import firebase_app from "../config";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
  try {
    const result = await signOut(auth);
    return { error: null, result };
  } catch (err) {
    const error = err as FirebaseError;
    return { error: error, result: null };
  }
}
