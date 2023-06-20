"use client";
import styles from "../page.module.css";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

const TripExamples = ["Barcelona", "Paris", "Tokyo", "New York"];

export default function Trips() {
  return (
    <main className={styles.tripList}>
      <Stack gap={1}>
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Your trips 🌎
        </Typography>
        {TripExamples.map((trip, i) => (
          <ButtonGroup variant="contained" key={i}>
            <Button
              href="/itineraries"
              component={Link}
              size="large"
              sx={{
                width: "100%",
                height: "80px",
              }}
            >
              <Typography fontWeight="bold">{trip}</Typography>
            </Button>
            <Button size="large">
              <DeleteIcon sx={{ color: "red" }} />
            </Button>
          </ButtonGroup>
        ))}
      </Stack>
      <Link href="/itineraries">
        <button className={styles.trip}>Barcelona 🗑️ </button>
      </Link>
      <Button variant="contained" className={styles.trip}>
        Paris 🗑️
      </Button>
      <Button className={styles.trip}>Tokyo 🗑️</Button>
      <Button className={styles.trip}>New York 🗑️</Button>
    </main>
  );
}
