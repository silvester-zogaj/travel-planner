import styles from "../page.module.css";
import Link from "next/link";

export default function Trips() {
  return (
    <main className={styles.tripList}>
      <h1>Your trips 🌎</h1>
      <Link href="/itineraries">
        <button className={styles.trip}>Barcelona 🗑️ </button>
      </Link>
      <button className={styles.trip}>Paris 🗑️</button>
      <button className={styles.trip}>Tokyo 🗑️</button>
      <button className={styles.trip}>New York 🗑️</button>
    </main>
  );
}
