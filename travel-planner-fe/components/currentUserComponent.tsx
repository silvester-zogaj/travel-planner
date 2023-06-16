"use client";
import { AuthContext } from "@/app/context/AuthContext";
import firebase_app from "@/app/firebase/config";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

function CurrentUser() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const getName = async () => {
      if (!user) return setName(null);
      const db = getFirestore(firebase_app);
      const docRef = doc(db, "users", user.uid);
      const currentData = await getDoc(docRef);
      const data = currentData.data();
      if (data === undefined) return setName(null);
      setName(data.name);
    };
    getName();
  }, [user]);

  return (
    <Box>
      <Stack direction="row" alignContent={"center"} gap={1}>
        <Typography variant="h4">
          {user?.email ? `Logged In As ${name}` : "Logged Out"}
        </Typography>
        <Avatar />
      </Stack>
    </Box>
  );
}

export default CurrentUser;
