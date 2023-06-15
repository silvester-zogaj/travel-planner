"use client";
import { useContext, useEffect, useState } from "react";
import signOutUser from "../firebase/auth/signOut";
import { Button, Link, LinkProps, Stack, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

function Logout() {
  const [status, setStatus] = useState<string>("");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const logout = async () => {
      if (!user) return;
      const error = await signOutUser();
      if (error) {
        setStatus(error.code);
        console.log("error", error);
      } else {
        setStatus("");
      }
    };
    logout();
  }, [user]);
  return (
    <Stack alignItems="center">
      <Typography variant="h3">Logged out successfully</Typography>
      <Button
        sx={{ width: "100px" }}
        href="/sign-in"
        variant="contained"
        component={Link}
      >
        Sign In
      </Button>
    </Stack>
  );
}

export default Logout;
