import { getFirestore } from "firebase/firestore";
import firebase_app from "./config";
import { doc, getDoc } from "firebase/firestore";
import { AuthContextProvider } from "../context/AuthContext";

const db = getFirestore(firebase_app);

export default function FetchData(uid:string) {
  const docRef = doc(db, "users", uid, "itineraries","Fn0gUp5gp72WADFR1Jji");
  getDoc(docRef).then((response) => {
    console.log(response.document.data.value.mapValue.fields.created_at)
    return response;
  });
}
