import Link from "next/link";
import styles from "./home.module.css";

export default function HomePage() {
    return (
        <div className={styles.page}>
            <div className={styles.hero_section_container}>
                <h1 className={styles.title}>
                    Trusted Partner for Aerospace Component Manufacturing
                </h1>
                <p className={styles.description}>
                    Delivering world-class aerospace and aeronautical parts with exceptional precision and reliability. Our advanced manufacturing capabilities, stringent quality systems, and customer-focused approach ensure every component meets the demanding requirements of the aerospace industry.
                </p>
                <div className={styles.hero_footer_description}>
                    <p>
                        With a commitment to excellence and innovation, SkyEdge is your trusted partner for all your aerospace manufacturing needs.
                    </p>
                </div>
            </div>
        </div>
    );
}
