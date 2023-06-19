"use client";
import { PlacesMap } from "@/components/placesMap";
import styles from "../../page.module.css";

export default function SingleDay() {
  return (
    <main className={styles.mapCenter}>
      <h1>Day number</h1>
      <PlacesMap />
      <h2>Morning</h2>
      <p>*Morning activities component goes here*</p>
      <h2>Afternoon</h2>
      <p>*Afternoon activities component goes here*</p>
      <h2>Evening</h2>
      <p>*Evening activities component goes here*</p>
    </main>
  );
}
