import { getFirestore } from "firebase/firestore";
import firebase_app from "./config";
import { doc, getDoc } from "firebase/firestore";
import { AuthContextProvider } from "../context/AuthContext";

const db = getFirestore(firebase_app);

export default function FetchData(uid: string) {
  const docRef = doc(db, "users", uid);
  getDoc(docRef).then((response) => {
    return response._document.data.value.mapValue.fields.itineraries.mapValue
    .fields.London.mapValue.fields;
  });
}