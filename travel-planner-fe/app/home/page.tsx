"use client";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { name } = useContext(AuthContext);

  return (
    <>
      <Typography variant="h5" style={{ marginBottom: "10px" }}>
        Hi {name}, welcome back 🏖️
      </Typography>
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
