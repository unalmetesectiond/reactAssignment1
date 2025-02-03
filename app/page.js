import Header from "./components/header";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>🔥 Welcome to the Anime Battle Tracker! 🔥</h1>
      <p>Choose your favorite anime character and power them up to become the strongest warrior! 💪</p>
      <p>Track your character's progress and reach legendary levels. 🌟</p>
    </div>
  );
}
