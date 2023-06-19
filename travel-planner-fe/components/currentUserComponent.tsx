"use client";
import { AuthContext } from "@/app/context/AuthContext";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";

function CurrentUser() {
  const { user, name } = useContext(AuthContext);

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        sx={{ height: "100%" }}
      >
        <Typography variant="body1">
          {user?.email ? `Logged In As ${name}` : "Logged Out"}
        </Typography>
        <Avatar />
      </Stack>
    </Box>
  );
}

export default CurrentUser;
