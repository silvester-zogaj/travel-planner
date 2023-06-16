import ReactMapGL, { Marker, Popup, Source, Layer } from "react-map-gl";

interface MapProps {
  locations: {
    id: number;
    latitude: number;
    longitude: number;
  }[];
}

function Map({ locations }: MapProps) {
  return (
    <ReactMapGL
      mapboxAccessToken="pk.eyJ1IjoibGFpOTYiLCJhIjoiY2xpdWVhdmQ3MHkybjNobzdnbjJwcmx6YSJ9.0CYohMf5CN77cD-BOo7mhw"
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      {locations.map((location) => {
        return (
          <Marker
            key={location.id}
            latitude={location.latitude}
            longitude={location.longitude}
          >
            <button className="marker-btn">
              <img src="/location.svg" alt="location icon" />
            </button>
          </Marker>
        );
      })}
    </ReactMapGL>
  );
}

export default Map;
