"use client";
import React, { useRef, useState } from "react";

import ReactMapGL, {
  Marker,
  MapRef,
  Popup,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import MuseumIcon from "@mui/icons-material/Museum";
import PaletteIcon from "@mui/icons-material/Palette";
import HikingIcon from "@mui/icons-material/Hiking";
import ParkIcon from "@mui/icons-material/Park";
import WineBarIcon from "@mui/icons-material/WineBar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import styles from "../app/page.module.css";

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

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
    address: place.full_address.replaceAll('"', ""),
    category: place.categories,
  }));

  const handleClick = () => {
    mapRef.current?.flyTo({
      center: [DEFAULT_LNG, DEFAULT_LAT],
      zoom: DEFAULT_ZOOM,
      essential: true,
    });
    setPopupInfo(null);
  };

  const renderPopup = () => {
    if (!popupInfo) return null;

    const getIcon = () => {
      if (popupInfo.category.includes("beach")) {
        return <BeachAccessIcon />;
      } else if (popupInfo.category.includes("museum")) {
        return <MuseumIcon />;
      } else if (popupInfo.category.includes("art")) {
        return <PaletteIcon />;
      } else if (popupInfo.category.includes("mountain")) {
        return <HikingIcon />;
      } else if (popupInfo.category.includes("park")) {
        return <ParkIcon />;
      } else if (popupInfo.category.includes("winery")) {
        return <WineBarIcon />;
      } else if (popupInfo.category.includes("theme park")) {
        return <AttractionsIcon />;
      } else if (popupInfo.category.includes("garden")) {
        return <LocalFloristIcon />;
      } else {
        return <RestaurantIcon />;
      }
    };

    return (
      <Popup
        closeButton={false}
        className={styles.popup}
        anchor="bottom"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => setPopupInfo(null)}
      >
        <div className={styles.popupDiv}>
          <h1>{popupInfo.name}</h1>
          {getIcon()}
          <p>{popupInfo.address}</p>
        </div>
      </Popup>
    );
  };

  return (
    <div id="mapbox-gl" className={styles.map}>
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken={accessToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        initialViewState={{
          longitude: DEFAULT_LNG,
          latitude: DEFAULT_LAT,
          zoom: DEFAULT_ZOOM,
        }}
      >
        <NavigationControl
          showZoom={false}
          showCompass={false}
          visualizePitch={false}
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            latitude={location.latitude}
            longitude={location.longitude}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(location);
              mapRef.current?.flyTo({
                center: [location.longitude, location.latitude],
                zoom: 15,
                speed: 0.7,
              });
            }}
          >
            <div className={styles.markerBg}></div>
            {location.category.includes("restaurant") ? (
              <LocationOnIcon className={styles.restaurantMarker} />
            ) : (
              <LocationOnIcon className={styles.activityMarker} />
            )}
          </Marker>
        ))}
        {renderPopup()}
      </ReactMapGL>
      <button onClick={handleClick}>Center</button>
    </div>
  );
};
