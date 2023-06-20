"use client";
import { PlacesMap } from "@/components/placesMap";
import styles from "../../page.module.css";
import FetchData from "@/app/firebase/fetchData";
import { AuthContext } from "@/app/context/AuthContext";
import { useContext, useEffect } from "react";

export default function SingleDay() {
  const {user} = useContext(AuthContext)
  useEffect(()=>{
    if (!user){
      return
    }
    FetchData(user.uid)
  },[user])
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
