import Link from "next/link";
import styles from "./contacts.module.css";

export default function ContactsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          Reach out to SkyEdge support for questions, partnerships, or feedback.
        </p>
        <ul className={styles.details}>
          <li>Email: support@skyedge.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Address: 123 SkyEdge Blvd, Suite 100</li>
        </ul>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
