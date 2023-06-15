"use client";
import { Paper, Stack } from "@mui/material";

interface ContainerProps {
  children: React.ReactNode;
}
function Container({ children }: ContainerProps) {
  return (
    <Stack alignItems="center">
      <Paper
        sx={{
          p: 1,
          width: "100%",
          height: "100vh",
        }}
      >
        {children}
      </Paper>
    </Stack>
  );
}

export default Container;
