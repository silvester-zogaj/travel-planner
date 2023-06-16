"use client";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

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
