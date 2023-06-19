"use client";
import { AuthContext } from "@/app/context/AuthContext";
import firebase_app from "@/app/firebase/config";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

function CurrentUser() {
  const { user, name } = useContext(AuthContext);

  return (
    <Box>
      <Stack direction="row" alignContent={"center"} gap={1}>
        <Typography variant="body1">
          {user?.email ? `Logged In As ${name}` : "Logged Out"}
        </Typography>
        <Avatar />
      </Stack>
    </Box>
  );
}

export default CurrentUser;
