"use client";

import { useState } from "react";
import Destination from "@/components/destinationSearch";
import Duration from "@/components/duration";
import Preferences from "@/components/preferences";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lng, setLng] = useState<number | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [numDays, setNumDays] = useState(0);

  return (
    <div>
      {currentPage === 1 && (
        <Destination
          setCurrentPage={setCurrentPage}
          setLng={setLng}
          setLat={setLat}
        />
      )}
      {currentPage === 2 && (
        <Duration
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          numDays={numDays}
          setNumDays={setNumDays}
        />
      )}
      {currentPage === 3 && (
        <Preferences
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lng={lng}
          lat={lat}
          numDays={numDays}
        />
      )}
    </div>
  );
}
