import { useState } from "react";

export const Buttons = ({ category, setPreferences }) => {
  const [toggle, setToggle] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleToggleOn = (e) => {
    setToggle(false);
    setPreferences((currPreferences) => {
      return [...currPreferences, e.target.value];
    });
  };

  const handleToggleOff = () => {
    setToggle(true);
  };

  return (
    <>
      {toggle ? (
        <button value={category} onClick={handleToggleOn}>
          {" "}
          {category}
        </button>
      ) : (
        <button
          value={category}
          style={{ opacity: "0.5" }}
          onClick={handleToggleOff}
        >
          {category}
        </button>
      )}
    </>
  );
};
