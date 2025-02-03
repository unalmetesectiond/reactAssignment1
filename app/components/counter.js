"use client";
import { useState } from "react";
import styles from "../styles/counter.module.css"; 

export default function Counter() {
  const [powerLevel, setPowerLevel] = useState(9000); 

  return (
    <div className={styles.counterBox}>
      <h2>🔥 Power Level: {powerLevel} ⚡</h2>
      <button className={styles.button} onClick={() => setPowerLevel(powerLevel + 1000)}>Train Harder! 💪</button>
      <button className={styles.button} onClick={() => setPowerLevel(powerLevel - 1000)}>Rest and Recover 💤</button>
    </div>
  );
}
