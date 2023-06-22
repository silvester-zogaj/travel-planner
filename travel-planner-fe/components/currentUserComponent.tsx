"use client";
import { AuthContext } from "@/app/context/AuthContext";

import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useContext } from "react";

function CurrentUser() {
  const { user, name } = useContext(AuthContext);

  return (
    <Paper sx={{ p: 1 }} elevation={2}>
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        sx={{ height: "100%" }}
      >
        <Typography variant="body1">
          {user?.email ? `Logged In As ${name}` : "Logged Out"}
        </Typography>
        {user && (
          <Avatar
            src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1492259543/avatars/000/518/341/518341-original.jpeg?1492259543"
            alt="Profile picture"
          />
        )}
      </Stack>
    </Paper>
  );
}

export default CurrentUser;
