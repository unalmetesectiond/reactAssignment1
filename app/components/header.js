import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/"><span className={styles.navItem}>🏠 Home</span></Link>
        </li>
        <li>
          <Link href="/about"><span className={styles.navItem}>📜 About</span></Link>
        </li>
        <li>
          <Link href="/counter"><span className={styles.navItem}>⚡ Power Counter</span></Link>
        </li>
      </ul>
    </nav>
  );
}
