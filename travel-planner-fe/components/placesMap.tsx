"use client";

import mapboxgl from "mapbox-gl";
import { useRef, useState, useEffect } from "react";
import styles from "../app/page.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

export const PlacesMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const allCoordinates = [
    [2.18, 41.385],
    [2.18, 41.381],
    [2.18, 41.376],
    [2.18, 41.382],
    [2.172, 41.382],
  ];
  let zoom = 12;
  let lng = 2.154007;
  let lat = 41.390205;

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2lsbmVlZHNhcGkiLCJhIjoiY2xpc25hODA5MWx2YTNmb3h6eWo3emZudSJ9.flkPaFQ0WCOqlDMwp2pMpQ";

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    const nav = new mapboxgl.NavigationControl({
      showZoom: true,
      showCompass: false,
      visualizePitch: false,
    });
    map.current.addControl(nav, "top-right");

    allCoordinates.map((coordinate) => {
      const marker = new mapboxgl.Marker({
        color: "crimson",
      })
        .setLngLat(coordinate)
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<h1 class=${styles.marker}>${coordinate}</h1>`
          )
        )
        .addTo(map.current);
    });
  }, []);

  const handleClick = () => {
    map.current.flyTo({
      center: [lng, lat],
      zoom: zoom,
      essential: true,
    });
  };

  return (
    <main>
      <div className={styles.map} ref={mapContainer}></div>
      <button onClick={handleClick}>Center</button>
    </main>
  );
};
