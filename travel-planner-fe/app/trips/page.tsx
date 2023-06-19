import styles from "../page.module.css"
export default function Trips () {
    return (
        <main className={styles.tripList}>
        <h1>Your trips 🌎</h1>
        <button className={styles.trip}>Barcelona 🗑️ </button>
        <button className={styles.trip}>Paris 🗑️</button>
        <button className={styles.trip}>Tokyo 🗑️</button>
        <button className={styles.trip}>New York 🗑️</button>
        </main>
    )
}