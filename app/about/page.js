import Header from "../components/header";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>📜 About the Anime Power Tracker</h1>
      <p>This is not just a counter... it’s a journey to becoming an anime legend! 🌟</p>
      <p>Pick your favorite anime character and level up their power just like in shonen anime. 🚀</p>
      <p>Train, fight, and surpass your limits! 💥</p>
    </div>
  );
}
