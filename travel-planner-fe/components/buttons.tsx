"use client"
import { useState } from "react";

export const Buttons = ({ category, setPreferences, isSelected }) => {
  const [toggle, setToggle] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleToggleOn = (e) => {
    console.log(e);
    setToggle(false);
    setPreferences((currPreferences) => {
      currPreferences[category] = true;
      return currPreferences;
    });
  };

  const handleToggle = () => {
    setPreferences((currPreferences) => {
      console.log(currPreferences)
      const currentState = currPreferences[category]??false
      currPreferences[category] = !currentState
      return currPreferences;

    });
    console.log("clicked")
  }


console.log("is selected", isSelected)
  const handleToggleOff = (e) => {
    setToggle(true);
    setPreferences((currPreferences) => {
      currPreferences[category] = undefined;
      return currPreferences;
    });
  };

  return (
    <>
      
        <button
          value={category}
          style={isSelected? {  }: {opacity: "0.5"}}
          onClick={handleToggle}
        >
          {category}
        </button>
      
    </>
  );
};
