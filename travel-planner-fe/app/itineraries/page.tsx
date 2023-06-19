"use client";

import { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Timeline from "@mui/lab/Timeline"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"

import { orange, red } from "@mui/material/colors";
import LoadingPage from "@/components/loadingPage";

const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"];

function Itinerary() {
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

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
            <TimelineContent
              onClick={() => setCurrentDay(i)}
              sx={{ height: "16vh" }}
            >
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
