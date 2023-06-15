"use client";
import { use, useState } from "react";

export default function Duration({ setCurrentPage, currentPage }) {
  const [day, setDay] = useState("Monday");
  const [numDays, setNumDays] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    setDay(e.target[0].value);
    setCurrentPage(currentPage + 1);
    console.log(e.target[1].value.length);
  };

  const handleReturn = (e) => {
    setCurrentPage(currentPage - 1);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setNumDays(e.target.value);
    if (e.target.value.length === 1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleSelect = (e) => {
    setDay(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Tell us a little more about your trip</h1>
        <h2>Which day do you arrive?</h2>
        <label htmlFor="day">Choose a day:</label>
        <select onChange={handleSelect} name="day" id="day">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <h2>How many days are you there for?</h2>
        <label htmlFor="days">Number of days</label>
        <input
          value={numDays}
          type="number"
          id="days"
          name="days"
          min="1"
          max="14"
          onChange={handleChange}
        />
        <br></br>
        <button type="submit" disabled={isDisabled}>
          Continue
        </button>
      </form>

      <form onSubmit={handleReturn}>
        <button type="submit">Return</button>
      </form>
    </>
  );
}
