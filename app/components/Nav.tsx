"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/skyEdge_logo.png" alt="SkyEdge Logo" width={100} height={50} priority />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <Link href="/" className={styles.link} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={styles.link} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contacts" className={styles.link} onClick={() => setMenuOpen(false)}>
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
}
