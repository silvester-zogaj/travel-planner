"use client";
import Link from "@mui/material/Link";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { redirect } from "next/navigation";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useIsDark } from "@/shared/AppMuiThemeProvider";

export default function LandingPage() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      redirect("/home");
    }
  }, [user]);
  return (
    <Stack sx={{ gap: 5 }}>
      <Typography textAlign="center" variant="h3">
        Ready, Jet Set, Go! 🧳
      </Typography>
      <Typography textAlign="center" variant="body2">
        Welcome to your itinerary travel planner, the ultimate companion for
        seamless trip organization and unforgettable adventures!
      </Typography>
      <Button variant="contained" href="/sign-in">
        Sign in
      </Button>
      <br></br>
      <Typography textAlign="center">
        If you do not have an account, <Link href="/sign-up">sign up here</Link>
      </Typography>
    </Stack>
  );
}
