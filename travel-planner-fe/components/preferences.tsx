"use client";
import { useState } from "react";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";
import {
  fetchPlaces,
  fetchRestaurants,
  transformData,
} from "@/utils/placesUtils";

import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import firebase_app from "@/app/firebase/config";
import { getFirestore } from "firebase/firestore";
import { writeDataToFirebase } from "@/utils/firebaseUtils";

const db = getFirestore(firebase_app);

interface PreferencesProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  lng: number | null;
  lat: number | null;
  numDays: number;
  destination: string;
}

export default function Preferences({
  setCurrentPage,
  currentPage,
  lng,
  lat,
  numDays,
  destination,
}: PreferencesProps) {
  const router = useRouter();
  const [preferences, setPreferences] = useState<Set<string>>(new Set());
  const { user } = useContext(AuthContext);
  const allCategories = [
    "beach",
    "museum",
    "art",
    "mountain",
    "park",
    "winery",
    "theme_park",
    "garden",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    if (!lng || !lat || !user) return;
    e.preventDefault();

    try {
      const [placesData, restaurantsData] = await Promise.all([
        fetchPlaces(preferences, lng, lat),
        fetchRestaurants(lng, lat),
      ]);

      const transformedPlaces = transformData(numDays, placesData);

      const transformedRestaurants = transformData(numDays, restaurantsData);

      await writeDataToFirebase(
        db,
        user.uid,
        transformedPlaces,
        transformedRestaurants,
        destination
      );

      router.push(
        `/itineraries?destination=${encodeURIComponent(destination)}`
      );
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const handleReturn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(currentPage - 1);
    e.preventDefault();
  };

  const handleToggle = (category: string) => {
    setPreferences((currPreferences) => {
      const cloned = new Set(currPreferences);
      const isSelected = currPreferences.has(category);
      if (isSelected) {
        cloned.delete(category);
      } else {
        cloned.add(category);
      }
      return cloned;
    });
  };

  return (
    <>
      <h1>{`Finally, tell us what you enjoy doing when you're away...`}</h1>
      {allCategories.map((category) => {
        const isSelected = !preferences.has(category);
        return (
          <button
            className={styles.preferencesButtons}
            onClick={() => {
              handleToggle(category);
            }}
            key={category}
            style={isSelected ? {} : { opacity: "0.5" }}
          >
            {category}
          </button>
        );
      })}
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        {allCategories.map((category) => {
          const isSelected = preferences.has(category);
          return (
            <button
              onClick={() => {
                handleToggle(category);
              }}
              key={category}
              style={isSelected ? {} : { opacity: "0.5" }}
            >
              {category}
            </button>
          );
        })}
        <br></br>
        <button type="submit">Generate plan</button>
      </form>
      <button onClick={handleReturn}>Return</button>
    </>
  );
}
