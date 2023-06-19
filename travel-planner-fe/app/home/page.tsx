"use client";
import { Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebase_app from "../firebase/config";

function Home() {
  const { name } = useContext(AuthContext);

  return (
    <>
      <Typography>Hi {name}, welcome back 🏖️</Typography>
      <Button variant="contained">View your itineraries</Button>
      <Typography>Or..</Typography>
      <Button variant="contained">Add a new trip!</Button>
    </>
  );
}

export default Home;
