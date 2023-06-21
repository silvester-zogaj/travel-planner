"use client";

import { useState, useEffect, useContext } from "react";
import { getFirestore } from "firebase/firestore";
import { orange, red } from "@mui/material/colors";
import { useSearchParams } from "next/navigation";
import { AuthContext } from "@/app/context/AuthContext";
import firebase_app from "@/app/firebase/config";
import { fetchDataFromFirebase } from "@/utils/firebaseUtils";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import LoadingPage from "@/components/loadingPage";
import Button from "@mui/material/Button";

const db = getFirestore(firebase_app);

function Itinerary() {
  const [currentDay, setCurrentDay] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [itineraryData, setItineraryData] = useState({
    places: [],
    restaurants: [],
  });

  useEffect(() => {
    if (!user?.uid || !destination) return;

    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchDataFromFirebase(db, user.uid, destination);
      setItineraryData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [user?.uid, destination]);

  if (isLoading) {
    return <LoadingPage />;
  }

  const days = itineraryData.places.length / 3;
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {Array.from({ length: days }, (_, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                height: "1rem",
                width: "1rem",
                backgroundColor: currentDay === index ? red[500] : orange[500],
              }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            onClick={() => setCurrentDay(index)}
            sx={{ height: `${70 / days}vh` }}
          >
            <Button
              fullWidth
              href={`/itineraries/day-${index + 1}?places=${encodeURIComponent(
                JSON.stringify(
                  itineraryData.places.slice(index * 3, index * 3 + 3)
                )
              )}&restaurants=${encodeURIComponent(
                JSON.stringify(
                  itineraryData.restaurants.slice(index * 3, index * 3 + 3)
                )
              )}`}
            >
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "50vw",
                }}
              >
                <Typography variant="h2" align="center">
                  Day {index + 1}
                </Typography>
              </Paper>
            </Button>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default Itinerary;
