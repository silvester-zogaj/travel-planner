"use client";
import { useEffect, useState } from "react";
import { Buttons } from "./buttons";

export default function Preferences({ setCurrentPage, currentPage }) {
  const [preferences, setPreferences] = useState<
    Set<string>
  >(new Set());

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
    console.log("current prefs", [...preferences])
  };

  const handleReturn = (e) => {
    setCurrentPage(currentPage - 1);
    e.preventDefault();
  };

  const handleToggle = (category: string) => {
    setPreferences((currPreferences) => {
      const cloned = new Set(currPreferences)
      const isSelected = currPreferences.has(category)
      if (isSelected) {
        currPreferences.delete(category)
      } else {
        currPreferences.add(category)
      }
      return cloned;
    });
    console.log("clicked", preferences);
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
          console.log("is selected", isSelected)
          return (
            <button
              onClick={() => {
                handleToggle(category);
              }}
              key={category}
              
              style={isSelected ? {} : { opacity: "0.5" }}
            >{category}</button>
          );
        })}
        <br></br>
        <button type="submit">Generate plan</button>
      </form>
      <form onSubmit={handleReturn}>
        <button type="submit">Return</button>
      </form>
    </>
  );
}
