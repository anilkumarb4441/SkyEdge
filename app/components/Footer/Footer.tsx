import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.certBlock}>
                <div className={styles.certLogoWrap}>
                    <Image src="/images/iso-badge.svg" alt="ISO 9001 Certified" width={76} height={76} />
                </div>
                <div className={styles.certText}>
                    <span className={styles.iso}>ISO 9001:2015</span>
                    <span className={styles.certified}>CERTIFIED</span>
                </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.tagline}>Precision Components for a Higher Tomorrow</div>

            <div className={styles.brandBlock}>
                <Image src="/skyEdge_logo.png" alt="SkyEdge Logo" width={46} height={46} />
                <div className={styles.brandText}>
                    <span>SKYEDGE</span>
                    <small>AEROSPACE</small>
                </div>
            </div>
        </div>
    )
}

export default Footer