"use client";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import { destinationSearch } from "./apis";
import { useRouter } from "next/navigation";
import {
  fetchPlaces,
  fetchRestaurants,
  transformData,
} from "@/utils/placesUtils";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Circle from "@mui/icons-material/Circle";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import MuseumIcon from "@mui/icons-material/Museum";
import PaletteIcon from "@mui/icons-material/Palette";
import HikingIcon from "@mui/icons-material/Hiking";
import ParkIcon from "@mui/icons-material/Park";
import WineBarIcon from "@mui/icons-material/WineBar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

interface PreferencesProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  lng: number | null;
  lat: number | null;
  numDays: number | null;
}

export default function Preferences({
  setCurrentPage,
  currentPage,
  lng,
  lat,
  numDays,
}: PreferencesProps) {
  const router = useRouter();
  const [preferences, setPreferences] = useState<Set<string>>(new Set());
  const [places, setPlaces] = useState<object[]>([]);
  const [restaurants, setRestaurants] = useState<object[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const allCategories = [
    {
      name: "Beach",
      category: "beach",
      icon: <BeachAccessIcon />,
    },
    {
      name: "Museum",
      category: "museum",
      icon: <MuseumIcon />,
    },
    {
      name: "Art",
      category: "art",
      icon: <PaletteIcon />,
    },
    {
      name: "Mountain",
      category: "mountain",
      icon: <HikingIcon />,
    },
    {
      name: "Park",
      category: "park",
      icon: <ParkIcon />,
    },
    {
      name: "Winery",
      category: "winery",
      icon: <WineBarIcon />,
    },
    {
      name: "Theme Park",
      category: "theme_park",
      icon: <AttractionsIcon />,
    },
    {
      name: "Garden",
      category: "garden",
      icon: <LocalFloristIcon />,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    const dayNum = numDays ? numDays : 1;
    if (!lng || !lat) return;
    e.preventDefault();

    try {
      const [placesData, restaurantsData] = await Promise.all([
        fetchPlaces(preferences, lng, lat),
        fetchRestaurants(lng, lat),
      ]);

      const transformedPlaces = transformData(dayNum, placesData);
      setPlaces(transformedPlaces);

      const transformedRestaurants = transformData(dayNum, restaurantsData);
      setRestaurants(transformedRestaurants);

      router.push("/itineraries/1");
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  console.log(places, restaurants);
  const handleReturn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(currentPage - 1);
    e.preventDefault();
  };

  const handleToggle = (category: string) => {
    setPreferences((currPreferences) => {
      const cloned = new Set(currPreferences);
      const isSelected = currPreferences.has(category);
      if (isSelected) {
        cloned.delete(category);
      } else {
        cloned.add(category);
      }
      return cloned;
    });
    console.log("clicked", preferences, "added", category);
  };
  // console.log("clicked", preferences);

  // useEffect(() => {
  //   console.log(preferences);
  // }, [preferences]);

  return (
    <>
      <Stack alignItems="center" justifyContent="center" gap={2}>
        <h1>{`Finally, tell us what you enjoy doing when you're away...`}</h1>
        <Stack
          sx={{
            background: "white",
            bgcolor: "background.paper",
            borderRadius: "16px",
            padding: "16px",
          }}
          gap={2}
        >
          {allCategories.map(({ name, category, icon }) => {
            const isSelected = preferences.has(category);
            return (
              <Chip
                size="medium"
                sx={{
                  width: "200px",
                }}
                onClick={() => {
                  handleToggle(category);
                }}
                label={category}
                key={category}
                onDelete={() => {
                  handleToggle(category);
                }}
                icon={icon}
                deleteIcon={isSelected ? <CheckCircle /> : <Circle />}
                variant={isSelected ? "outlined" : "filled"}
              />
            );
          })}
        </Stack>
        <Stack alignContent="space-around" direction="row">
          <Button variant="contained" onClick={handleSubmit}>
            Generate plan
          </Button>
          <Button variant="contained" onClick={handleReturn}>
            Return
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
