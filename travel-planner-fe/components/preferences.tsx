"use client";
import { useEffect, useState } from "react";
import { Buttons } from "./buttons";
import styles from "../app/page.module.css"
import { Link } from "@mui/material";
import Itinerary from "../app/itineraries/page";

export default function Preferences({ setCurrentPage, currentPage }) {
  const [preferences, setPreferences] = useState<Set<string>>(new Set());

  const allCategories = [
    "Adventure",
    "Nature",
    "History",
    "Culture",
    "Sport/Exercise",
    "Relaxing",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("current prefs", [...preferences]);
  };

  const handleReturn = (e) => {
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

  // useEffect(() => {
  //   console.log(preferences);
  // }, [preferences]);

  return (
    <>
      <h1>Finally, tell us what you enjoy doing when you're away...</h1>
      <form onSubmit={handleSubmit}>
        {allCategories.map((category) => {
          const isSelected = preferences.has(category);
          console.log("is selected", isSelected);
          return (
            <button className={styles.preferencesButtons}
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
        <Link href="/itineraries">
        <button type="submit">Generate plan</button>
        </Link>
      </form>
      <form onSubmit={handleReturn}>
        <button type="submit">Return</button>
      </form>
    </>
  );
}
