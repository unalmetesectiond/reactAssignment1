"use client";

import { useState } from "react";
import Header from "../components/header";
import Counter from "../components/counter";
import StatusMessage from "../components/message";
import styles from "../styles/counter.module.css"; 

export default function CounterPage() {
  const [characterName, setCharacterName] = useState("Goku");
  const [tempName, setTempName] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCharacterName(tempName.trim() || "Goku"); 
      setTempName(""); 
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <h1>⚡ Anime Power Level Counter ⚡</h1>
      <Counter />

      <label htmlFor="animeCharacter">Enter an Anime Warrior's Name: </label>
      <input
        id="animeCharacter"
        type="text"
        placeholder="Goku, Luffy, Naruto"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.inputField}
      />

      <StatusMessage username={characterName} />
    </div>
  );
}
