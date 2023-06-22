"use client";
import Image from "next/image";
import { Map, MapRef, useMap } from "react-map-gl";
import styles from "../app/page.module.css";
import ReactMapGL, {
  Marker,
  Popup,
  Source,
  Layer,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { red } from "@mui/material/colors";
import mapboxgl from "mapbox-gl";
import { useRef, useState, useEffect } from "react";

import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import MuseumIcon from "@mui/icons-material/Museum";
import PaletteIcon from "@mui/icons-material/Palette";
import HikingIcon from "@mui/icons-material/Hiking";
import ParkIcon from "@mui/icons-material/Park";
import WineBarIcon from "@mui/icons-material/WineBar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import React from "react";
import { SetStateAction } from "react";
import { Button, Paper } from "@mui/material";

interface ItemsProps {
  name: string;
  full_address: string;
  categories: string[];
  coordinates: {
    longitude: number;
    latitude: number;
  };
}
interface PlacesMapProps {
  places: ItemsProps[];
  restaurants: ItemsProps[];

  destinationCoordinates: {
    lat: number;
    lng: number;
  };
}

interface LocationProps {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  category: string[];
}

export const PlacesMap = ({
  places,
  restaurants,
  destinationCoordinates,
}: PlacesMapProps) => {
  const mapRef = useRef<MapRef | null>(null);
  const [popupInfo, setPopupInfo] = useState<LocationProps | null>(null);
  const allPlaces = [...places, ...restaurants];
  const DEFAULT_LAT = destinationCoordinates.lat;
  const DEFAULT_LNG = destinationCoordinates.lng;
  const DEFAULT_ZOOM = 12;

  const locations = allPlaces.map((place, index) => ({
    id: index,
    latitude: place.coordinates.latitude,
    longitude: place.coordinates.longitude,
    name: place.name,
    address: place.full_address,
    category: place.categories,
  }));

  const handleClick = () => {
    mapRef.current?.flyTo({
      center: [DEFAULT_LNG, DEFAULT_LAT],
      zoom: DEFAULT_ZOOM,
      essential: true,
    });
  };

  console.log(places, restaurants);

  return (
    <>
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken="pk.eyJ1IjoibGFpOTYiLCJhIjoiY2xpdWVhdmQ3MHkybjNobzdnbjJwcmx6YSJ9.0CYohMf5CN77cD-BOo7mhw"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        initialViewState={{
          longitude: DEFAULT_LNG,
          latitude: DEFAULT_LAT,
          zoom: DEFAULT_ZOOM,
        }}
        style={{
          minWidth: "20vw",
          minHeight: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <NavigationControl
          showZoom={false}
          showCompass={false}
          visualizePitch={false}
        />
        {locations.map((location) => {
          return (
            <>
              <Marker
                key={location.id}
                latitude={location.latitude}
                longitude={location.longitude}
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setPopupInfo(location);
                }}
              >
                {location.category.includes("restaurant") ? (
                  <LocationOnIcon className={styles.restaurantMarker} />
                ) : (
                  <LocationOnIcon className={styles.activityMarker} />
                )}
              </Marker>

              {popupInfo && (
                <Popup
                  closeButton={false}
                  className={styles.popup}
                  anchor="bottom"
                  longitude={popupInfo.longitude}
                  latitude={popupInfo.latitude}
                  onClose={() => setPopupInfo(null)}
                >
                  <div className={styles.popupdiv}>
                    <h1>{popupInfo.name}</h1>
                    {popupInfo.category.includes("beach") ? (
                      <BeachAccessIcon />
                    ) : popupInfo.category.includes("museum") ? (
                      <MuseumIcon />
                    ) : popupInfo.category.includes("art") ? (
                      <PaletteIcon />
                    ) : popupInfo.category.includes("mountain") ? (
                      <HikingIcon />
                    ) : popupInfo.category.includes("park") ? (
                      <ParkIcon />
                    ) : popupInfo.category.includes("winery") ? (
                      <WineBarIcon />
                    ) : popupInfo.category.includes("theme park") ? (
                      <AttractionsIcon />
                    ) : popupInfo.category.includes("garden") ? (
                      <LocalFloristIcon />
                    ) : (
                      <RestaurantIcon />
                    )}
                    <h2>{popupInfo.address}</h2>
                  </div>
                </Popup>
              )}
            </>
          );
        })}
      </ReactMapGL>
      <Button variant="contained" onClick={handleClick}>
        Center
      </Button>
    </>
  );
};
