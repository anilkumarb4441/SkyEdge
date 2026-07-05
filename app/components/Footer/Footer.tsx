import { Iceberg } from 'next/font/google'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_item}>
                <p>© 2026 SkyEdge aerospace. All rights reserved.</p>
            </div>
            <div className={styles.footer_item}>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13.5 20v-8h2.7l.4-3h-3.1V3.7c0-.9.2-1.5 1.5-1.5h1.6V.1C16.4.1 15.3 0 14 0c-2.3 0-3.9 1.4-3.9 4v2.2H7.4v3h2.7v8h3.4z" fill="currentColor"/>
                    </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm6.2-1.7a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z" fill="currentColor"/>
                    </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19.2 5 12 5 12 5s-7.2 0-8.9.4A3 3 0 0 0 1 7.5 31.4 31.4 0 0 0 1 12a31.4 31.4 0 0 0 0 4.5 3 3 0 0 0 2.1 2.1C4.8 19 12 19 12 19s7.2 0 8.9-.4a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 23 12a31.4 31.4 0 0 0 0-4.5zM9.8 15.2V8.8l6.2 3.2-6.2 3.2z" fill="currentColor"/>
                    </svg>
                </a>
            </div>
            <div className={styles.footer_item} style={{gap:"2rem"}}>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>

        </div>
    )

}
export default Footer