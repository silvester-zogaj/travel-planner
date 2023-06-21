"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import firebase_app from "@/app/firebase/config";
import { fetchDataFromFirebase } from "@/utils/firebaseUtils";
import { getFirestore } from "firebase/firestore";
import styles from "../page.module.css";
import Link from "next/link";
import LoadingPage from "@/components/loadingPage";

const db = getFirestore(firebase_app);

export default function Trips() {
  const [trips, setTrips] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      if (!user?.uid) return;

      try {
        setIsLoading(true);
        const data = await fetchDataFromFirebase(db, user.uid);
        const tripNames = Object.keys(data);
        setTrips(tripNames);
        setIsLoading(false);
        console.log(tripNames);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [user?.uid]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (trips.length === 0) {
    return <p>No trips found</p>;
  }

  return (
    <main className={styles.tripList}>
      <h1>Your trips 🌎</h1>
      {trips.map((trip) => (
        <Link key={trip} href={`/itineraries?destination=${trip}`}>
          <button className={styles.trip}>{trip} 🗑️</button>
        </Link>
      ))}
    </main>
  );
}
