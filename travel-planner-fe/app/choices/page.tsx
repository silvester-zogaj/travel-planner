'use client'

import { useState } from "react";
import Destination from "@/components/destinationSearch";
import Duration from "@/components/duration";

export default function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [previousPage, setPreviousPage] = useState(0);

    // const handleSubmit = () => {
    //   setPreviousPage(currentPage);
    //   setCurrentPage((prevPage) => prevPage - 1);
    // };

    // const handleReturn = () => {
    //   setCurrentPage(previousPage);
    //   setPreviousPage((prevPage) => prevPage - 1);
    // };


  return (
    <div>
      {currentPage === 1 && <Destination setCurrentPage={setCurrentPage}  />}
      {currentPage === 2 && <Duration setCurrentPage={setCurrentPage} />}
    </div>
  );
}