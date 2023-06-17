"use client";
import React, { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import styles from "../app/page.module.css";

export default function destination({ setCurrentPage, setLng, setLat }) {
  const [destination, setDestination] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setCurrentPage((currPage) => currPage + 1);
    e.preventDefault();
  };

  const handleRetrieve = (e) => {
    setLng(e.features[0].properties.coordinates.longitude);
    setLat(e.features[0].properties.coordinates.latitude);
    setDestination(e.features[0].properties.name);
    setIsDisabled(false);
  };

  const handleChange = (e) => {
    setIsDisabled(true);
  };

  return (
    <>
      <h1>Where are you headed?</h1>
      <form className={styles.search} onSubmit={handleSubmit}>
        <SearchBox
          options={{
            language: "en",
            types: "place",
          }}
          value={destination}
          accessToken={
            "pk.eyJ1IjoibGFpOTYiLCJhIjoiY2xpdWVhdmQ3MHkybjNobzdnbjJwcmx6YSJ9.0CYohMf5CN77cD-BOo7mhw"
          }
          onRetrieve={handleRetrieve}
          onChange={handleChange}
        />

        <button disabled={isDisabled} type="submit">
          Continue
        </button>
      </form>
    </>
  );
}
