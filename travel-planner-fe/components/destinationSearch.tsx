"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { destinationSearch } from "./apis";
import { SearchBox } from "@mapbox/search-js-react";

export default function Destination({ setCurrentPage }) {
  const [input, setInput] = React.useState("London");

  // useEffect(() => {
  //   destinationSearch(input)
  //     .then((response) => {

  //   })
  // }, [])

  const handleSubmit = (e: React.FormEvent) => {
    setCurrentPage((currPage) => currPage + 1);
    e.preventDefault();
  };

  const handleRetrieve = (e) => {
    setInput(e.features[0].properties.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchBox
        options={{ types: "place" }}
        onRetrieve={handleRetrieve}
        value={input}
        accessToken={
          "pk.eyJ1IjoibGFpOTYiLCJhIjoiY2xpdWVhdmQ3MHkybjNobzdnbjJwcmx6YSJ9.0CYohMf5CN77cD-BOo7mhw"
        }
      />

      <button type="submit">Continue</button>
    </form>
  );
}
