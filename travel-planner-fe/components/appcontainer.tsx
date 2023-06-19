"use client";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

interface ContainerProps {
  children: React.ReactNode;
}
function Container({ children }: ContainerProps) {
  return (
    <Paper
      sx={{
        p: 1,
        width: "100%",
        height: "calc(100vh - 74px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        {children}
      </Stack>
    </Paper>
  );
}

export default Container;
