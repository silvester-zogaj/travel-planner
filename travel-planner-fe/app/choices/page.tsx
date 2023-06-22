"use client";

import { ReactElement, ReactNode, useEffect, useState } from "react";
import Destination from "@/components/destinationSearch";
import Duration from "@/components/duration";
import Preferences from "@/components/preferences";
import Paper from "@mui/material/Paper";
import Slide, { SlideProps } from "@mui/material/Slide";

enum Pages {
  Destination,
  Duration,
  Preferences,
}
export default function App() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Destination);
  const [destination, setDestination] = useState<string>("");
  const [lng, setLng] = useState<number | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [numDays, setNumDays] = useState<null | number>(null);
  const [slide, setSlide] = useState<boolean>(false);
  const [slideDirection, setSlideDirection] =
    useState<SlideProps["direction"]>("left");

  const handleNextPage = () => {
    setCurrentPage((currPage) => currPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((currPage) => currPage - 1);
  };

  return (
    <>
      {currentPage === Pages.Destination && (
        <Destination
          handleNextPage={handleNextPage}
          setLng={setLng}
          setLat={setLat}
          setDestination={setDestination}
          destination={destination}
        />
      )}
      {currentPage === Pages.Duration && (
        <Duration
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          numDays={numDays}
          setNumDays={setNumDays}
        />
      )}
      {currentPage === Pages.Preferences && (
        <Preferences
          handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          lng={lng}
          lat={lat}
          numDays={numDays}
          destination={destination}
        />
      )}
    </>
  );
}
