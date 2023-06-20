"use client";
import { SetStateAction, useState } from "react";

interface DurationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  numDays: number;
  setNumDays: React.Dispatch<React.SetStateAction<number>>;
}

export default function Duration({
  setCurrentPage,
  currentPage,
  numDays,
  setNumDays,
}: DurationProps) {
  const [day, setDay] = useState("Monday");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    const [day, numDays] = e.target;
    setDay(day.value);
    setCurrentPage(currentPage + 1);
  };

  const handleReturn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(currentPage - 1);
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumDays(Number(e.target.value));
    if (e.target.value.length === 1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleSelect = (e: { target: { value: SetStateAction<string> } }) => {
    setDay(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Tell us a little more about your trip</h1>
        <h2>Which day do you arrive?</h2>
        <label htmlFor="day">Choose a day:</label>{" "}
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
        <label htmlFor="days">Number of days</label>{" "}
        <input
          value={numDays}
          type="number"
          id="days"
          name="days"
          min="1"
          max="7"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button type="submit" disabled={isDisabled}>
          Continue
        </button>
      </form>

      <button onClick={handleReturn} type="submit">
        Return
      </button>
    </>
  );
}
