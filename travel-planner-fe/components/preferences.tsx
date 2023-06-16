"use client";
import { useEffect, useState } from "react";
import { Buttons } from "./buttons";

export default function Preferences({ setCurrentPage, currentPage }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledNature, setisDisabledNature] = useState(false);
  const [preferences, setPreferences] = useState<
    Record<string, boolean | undefined>
  >({});

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
  };

  const handleReturn = (e) => {
    setCurrentPage(currentPage - 1);
    e.preventDefault();
  };

  const handleToggle = (category: string) => {
    setPreferences((currPreferences) => {
      console.log(currPreferences);
      const currentState = currPreferences[category] ?? false;
      currPreferences[category] = !currentState;
      return currPreferences;
    });
    console.log("clicked");
  };

  // useEffect(() => {
  //   console.log(preferences);
  // }, [preferences]);

  return (
    <>
      <h1>Finally, tell us what you enjoy doing when you're away...</h1>
      <form onSubmit={handleSubmit}>
        {allCategories.map((category) => {
          const isSelected = preferences[category] === true;
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
