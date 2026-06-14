import Link from "next/link";
import styles from "./(pages)/home/home.module.css";
import HomePage from "./(pages)/home/page";
export default function Page() {
  return (
    <div className={styles.page}>
      <HomePage />
    </div>
  );
}
