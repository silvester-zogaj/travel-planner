"use client";
import { PlacesMap } from "@/components/placesMap";
import styles from "../../page.module.css";
import FetchData from "@/app/firebase/fetchData";
import { AuthContext } from "@/app/context/AuthContext";
import { useContext, useEffect } from "react";

export default function SingleDay() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      return;
    }
    return FetchData(user.uid).then((response) => {
      console.log(
        response._document.data.value.mapValue.fields.itineraries.mapValue
          .fields.London.mapValue.fields.places.arrayValue.values
      );
      console.log(
        response._document.data.value.mapValue.fields.itineraries.mapValue
          .fields.London.mapValue.fields.restaurants.arrayValue.values
      );
      console.log(response);
    });
  }, [user]);
  return (
    <main className={styles.mapCenter}>
      <h1>Day 1</h1>
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
