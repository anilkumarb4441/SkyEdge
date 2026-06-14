import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>About SkyEdge</h1>
        <p className={styles.description}>
          SkyEdge is a modern platform built to connect customers, data, and teams with 
          fast, friendly experiences.
        </p>
        <p className={styles.details}>
          We are focused on design, performance, and providing a great developer
          experience in every screen.
        </p>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/contacts" className={styles.link}>
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
}
