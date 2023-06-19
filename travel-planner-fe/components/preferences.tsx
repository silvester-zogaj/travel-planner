"use client";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import { destinationSearch } from "./apis";
import { useRouter } from "next/navigation";

interface PreferencesProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  lng: number | null;
  lat: number | null;
}

export default function Preferences({
  setCurrentPage,
  currentPage,
  lng,
  lat,
}: PreferencesProps) {
  const router = useRouter();
  const [preferences, setPreferences] = useState<Set<string>>(new Set());
  const [results, setResults] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const allCategories = ["park", "coffee", "sports", "food", "museum"];

  const handleSubmit = (e: React.FormEvent) => {
    if (!lng || !lat) return;
    e.preventDefault();

    [...preferences].forEach((category) => {
      destinationSearch(category, lng, lat).then((response) => {
        setResults((currResults) => {
          return [...currResults, ...response.features];
        });
      });
    });
    router.push("/itineraries/1");
  };
  console.log(results);

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
    console.log("clicked", preferences, "added", category);
  };
  // console.log("clicked", preferences);

  // useEffect(() => {
  //   console.log(preferences);
  // }, [preferences]);

  return (
    <>
      <h1>{`Finally, tell us what you enjoy doing when you're away...`}</h1>
      {allCategories.map((category) => {
        const isSelected = preferences.has(category);
        // console.log("is selected", isSelected)
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
          console.log("is selected", isSelected);
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
