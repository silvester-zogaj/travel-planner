"use client";
import { useState } from "react";

export default function Preferences({ setCurrentPage, currentPage }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [preferences, setPreferences] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleReturn = (e) => {
    setCurrentPage(currentPage - 1);
    e.preventDefault();
  };

  const handleClick = (e) => {
    setPreferences((currPreferences) => {
      return [...currPreferences, e.target.value];
    });
    if (!e.target.disabled) {
      e.target.disabled = true;
    }
  };

  console.log(preferences);
  return (
    <>
      <h1>Finally, tell us what you enjoy doing when you're away...</h1>
      <form onSubmit={handleSubmit}>
        <button value="adventure" onClick={handleClick}>
          Adventure
        </button>
        <button value="nature" onClick={handleClick}>
          Nature
        </button>
        <button value="history" onClick={handleClick}>
          History
        </button>
        <button value="culture" onClick={handleClick}>
          Culture
        </button>
        <button value="relaxing" onClick={handleClick}>
          Relaxing
        </button>
        <button value="sports" onClick={handleClick}>
          Sports
        </button>
        <button type="submit">Continue</button>
      </form>
      <form onSubmit={handleReturn}>
        <button type="submit">Return</button>
      </form>
    </>
  );
}
