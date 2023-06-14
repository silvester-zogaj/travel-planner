"use client";
import { use, useState } from "react";

export default function Duration() {
  const [day, setDay] = useState(null);
  const [numDays, setNumDays] = useState(0);

  const handleSubmit = (e) => {
    setDay(e.target[0].value);
    setNumDays(e.target[1].value);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Tell us a little more about your trip</h1>
        <h2>Which day do you arrive?</h2>
        <label htmlFor="day">Choose a day:</label>
        <select name="day" id="day">
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
        <input type="number" id="days" name="days" min="1" max="14" />
        <br></br>
        <button type="submit">Continue</button>
      </form>
    </>
  );
}
