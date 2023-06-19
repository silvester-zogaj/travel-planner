import Image from "next/image";
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
interface MapProps {
  locations: {
    id: number;
    latitude: number;
    longitude: number;
  }[];
  lng: number;
  lat: number;
  zoom: number;
}

function Map({ locations, lng, lat, zoom }: MapProps) {
  return (

  );
}

export default Map;
