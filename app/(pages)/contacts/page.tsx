import Link from "next/link";
import styles from "./contacts.module.css";

export default function ContactsPage() {
  const mapUrl =
    "https://maps.google.com/maps?q=13.01378059387207%2C77.51122283935547&z=17&hl=en&output=embed";

  return (
    <div className={styles.page}>
      <div className={styles.contactLayout}>
        <div className={styles.card}>
          <p className={styles.kicker}>CONTACT US</p>
          <h1 className={styles.title}>Skyedge Aerospace</h1>

          <div className={styles.infoGroup}>
            <div className={styles.label}>Address</div>
            <p>3rd Cross Road, 2nd Stage, Rajagopala Nagar, Peenya, Bengaluru, Karnataka - 560058</p>
          </div>

          <div className={styles.infoGroup}>
            <div className={styles.label}>Phone</div>
            <p>Mob: 8762582537</p>
          </div>

          <div className={styles.infoGroup}>
            <div className={styles.label}>Email</div>
            <p>skyedgeaerospace.26@gamil.com</p>
          </div>

          <div className={styles.links}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About Us</Link>
          </div>
        </div>

        <div className={styles.mapCard}>
          <div className={styles.mapHeader}>
            <span className={styles.mapBadge}>Location</span>
            <h2>Our Facility</h2>
          </div>

          <iframe
            src={mapUrl}
            title="Skyedge Aerospace Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapFrame}
          />
        </div>
      </div>
    </div>
  );
}
