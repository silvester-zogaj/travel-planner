"use client";
import { Button, Link, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { name } = useContext(AuthContext);

  return (
    <>
      <Typography>Hi {name}, welcome back 🏖️</Typography>
      <Button component={Link} href="/trips" variant="contained">
        View your itineraries
      </Button>
      <Typography>Or..</Typography>
      <Button component={Link} href="/choices" variant="contained">
        Add a new trip!
      </Button>
    </>
  );
}

export default Home;
