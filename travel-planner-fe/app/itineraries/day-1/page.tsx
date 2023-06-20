"use client";
import { PlacesMap } from "@/components/placesMap";
import styles from "../../page.module.css";

export default function Day1() {
  return (
    <main className={styles.mapCenter}>
      <h1>Day 1</h1>
      <PlacesMap />
      <div className={styles.day}>
      <h2>Morning</h2>
      <p>Breakfast: Bites Restaurant</p>
      <p>
        Activity: Joan Miró Foundation, A place to experience the art of Joan
        Miró and other twentieth and twenty-first century artists, a space for
        participation and dialogue.
      </p>
      </div>
      <div className={styles.day}>
      <h2>Afternoon</h2>
      <p>Lunch: Central Burgers Barcelona</p>
      <p>
        Activity: Aquàrium Barcelona, You will find over 11,000 marine animals
        from 450 species and an 80-metres-long underwater tunnel through the
        shark basin. Book tickets here and get inside without standing in line.
      </p>
      </div>
      <div className={styles.day}>
      <h2>Evening</h2>
      <p>Dinner: Amades restaurant</p>
      <p>
        Activites: Arco de Triunfo de Barcelona, The Arc de Triomf was built as
        the gateway to the fair which was held in the Parc de la Ciutadella. The
        monument is classical in shape and proportions and features
        ground-breaking sculptural and decorative finishes replete with
        symbolism. It has become one of the city's iconic landmarks.
      </p>
      </div>
    </main>
  );
}
