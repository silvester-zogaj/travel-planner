import { Firestore, doc, getDoc, updateDoc } from "firebase/firestore";

export async function writeDataToFirebase(
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

    await updateDoc(userRef, {
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
    console.error("Error writing data to Firebase:", error);
  }
}

export async function fetchDataFromFirebase(
  db: Firestore,
  uid: string,
  destination?: string
) {
  try {
    const userRef = doc(db, "users", uid);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();

      if (userData && userData.itineraries) {
        if (destination && userData.itineraries[destination]) {
          const itineraryData = userData.itineraries[destination];
          return itineraryData;
        } else {
          return userData.itineraries;
        }
      }
    }
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
  }
}
