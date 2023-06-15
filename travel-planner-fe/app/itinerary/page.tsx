"use client";
import { useState } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { orange, red } from "@mui/material/colors";

const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"];

function Itinerary() {
  const [currentDay, setCurrentDay] = useState<number | null>(null);
  return (
    <Paper sx={{ height: "100vh", maxWidth: "800px" }}>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {days.map((day, i) => (
          <TimelineItem key={day}>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                sx={{
                  height: "2rem",
                  width: "2rem",
                  backgroundColor: currentDay === i ? red[500] : orange[500],
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ height: "16vh" }}>
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h2" align="center">
                  {day}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
}

export default Itinerary;
