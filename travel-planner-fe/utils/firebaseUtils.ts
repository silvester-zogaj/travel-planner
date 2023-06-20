import { Firestore, doc, getDoc, updateDoc } from "firebase/firestore";

async function writeDataToFirebase(
  db: Firestore,
  uid: string,
  places: Array<{}>,
  restaurants: Array<{}>,
  destination: string
) {
  try {
    const userRef = doc(db, "users", uid);
    const currentData = await getDoc(userRef);
    const userData = currentData.data();

    if (!userData) return;

    const itineraryRef = await updateDoc(userRef, {
      itineraries: {
        ...userData.itineraries,
        [destination]: {
          created_at: new Date().toISOString(),
          name: destination,
          places: [...places],
          restaurants: [...restaurants],
        },
      },
    });
  } catch (error) {
    console.error("Error writing test data to Firebase:", error);
  }
}

export default writeDataToFirebase;
