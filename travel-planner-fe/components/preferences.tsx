"use client";
import { useState } from "react";
import { Buttons } from "./Buttons";

export default function Preferences({ setCurrentPage, currentPage }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledNature, setisDisabledNature] = useState(false);
  const [preferences, setPreferences] = useState([]);

  const allCategories = ["adventure", "nature", "history", "culture", "sport"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleReturn = (e) => {
    setCurrentPage(currentPage - 1);
    e.preventDefault();
  };


  return (
    <>
      <h1>Finally, tell us what you enjoy doing when you're away...</h1>
      <form onSubmit={handleSubmit}>
        {allCategories.map((category) => {
          return (
            <Buttons
              category={category}
              setPreferences={setPreferences}
            />
          );
        })}
      </form>
      <form onSubmit={handleReturn}>
        <button type="submit">Return</button>
      </form>
    </>
  );
}
