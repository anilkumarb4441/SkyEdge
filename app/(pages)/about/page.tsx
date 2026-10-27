import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heroSection}>
        <p className={styles.kicker}>ABOUT SKYEDGE</p>
        <h1 className={styles.title}>Engineering Precision. Powering Aerospace.</h1>
        <p className={styles.description}>
          Skyedge Aerospace is a trusted manufacturer of high-quality precision components for the aerospace industry. We combine advanced technology, skilled expertise and a strong focus on quality to deliver components that meet the strictest industry standards and customer expectations.
        </p>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.infoCard}>
          <h2>Who We Are</h2>
          <p>
            We are a precision manufacturing partner focused on delivering reliable, high-performance aerospace components built for mission-critical applications.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h2>What We Do</h2>
          <p>
            From VMC milling and precision turning to final inspection and documentation, we support customers with precision-driven manufacturing and full traceability.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h2>Our Commitment</h2>
          <p>
            We are committed to quality, accuracy, and continuous improvement so every component supports safety, performance, and long-term customer trust.
          </p>
        </div>
      </div>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/contacts" className={styles.link}>
          Contacts
        </Link>
      </div>
    </div>
  );
}
