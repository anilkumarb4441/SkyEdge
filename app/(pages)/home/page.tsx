"use client";

import Image from "next/image";
import styles from "./home.module.css";
import Footer from "@/app/components/Footer/Footer";

export default function HomePage() {
    const scrollToSection = () => {
        const section = document.getElementById("whatwedo-section");
        if (!section) return;

        const navbarHeight = 70;
        const topPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
    };

    return (
        <div>
            <div className={styles.page}>
                <div className={styles.hero_section_container}>
                    <h1 className={styles.title}>
                        Driven by Precision, Powered by Quality
                    </h1>
                    <button className={styles.hero_button} onClick={scrollToSection}>
                        Explore More
                    </button>
                    <div className={styles.hero_footer_description}>
                        <div className={styles.herofooter_content}>
                            <h2>±5µ</h2>
                            <p>Precision Tolerance</p>
                        </div>
                        <div className={styles.herofooter_content}>
                            <h2>AS9100D</h2>
                            <p>Certified</p>
                        </div>
                        <div className={styles.herofooter_content}>
                            <h2>5+</h2>
                            <p>Number of CNC Machines</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.ourStrengths_section_container}>
                <h2>OUR STRENGTH</h2>
                <div className={styles.ourStrengths_content}>
                    <div className={styles.ourStrengths_item}>
                        <Image src="/images/strength_machinery.png" alt="Strength 1" width={70} height={70} />
                        <h3>High tech Machining facility</h3>
                    </div>
                    <div className={styles.ourStrengths_item}>
                        <Image src="/images/strength_commitment.png" alt="Strength 1" width={70} height={70} />
                        <h3>Commitment to Quality and Delivery</h3>
                    </div>
                    <div className={styles.ourStrengths_item}>
                        <Image src="/images/strength_product_development.png" alt="Strength 1" width={70} height={70} />
                        <h3>New product Development</h3>
                    </div>
                    <div className={styles.ourStrengths_item}>
                        <Image src="/images/strength_technical_support.png" alt="Strength 1" width={70} height={70} />
                        <h3>Technical expertize</h3>
                    </div>
                </div>
            </div>
            <div id="whatwedo-section" className={styles.whatwedo_section_container}>
                <div className={styles.whatwedo_content}>
                    <h2>What We Do</h2>
                    <p>
                        At SkyEdge, we specialize in precision CNC machining, delivering high-quality components with tight tolerances. Our state-of-the-art equipment and skilled team ensure that every part meets the highest standards of accuracy and reliability.
                    </p>
                    <p>
                        Driven by innovation and a passion for excellence, we offer end-to-end manufacturing solutions—from rapid prototyping to full-scale production—tailored to meet the evolving needs of diverse industries. Every component we produce reflects our commitment to quality, reliability, and on-time delivery, helping our customers accelerate performance, reduce production challenges, and achieve lasting success. At SkyEdge, we don't just manufacture parts—we build trust, inspire confidence, and deliver precision that powers progress.
                    </p>
                </div>
                <div className={styles.whatwedo_image}>
                    <Image src="/images/whatwedo.jpg" alt="What We Do" width={500} height={350} />
                </div>
            </div>
            <div className={styles.vissionandmission_section_container}>
              <div className={styles.image_container}>
                <Image src="/images/vission.png" alt="What We Do" width={500} height={350} />
              </div>
                <div className={styles.vissionandmission_content}>
                    <h2 className={styles.vissionandmission_title}>Our Vision & Mission</h2>
                    <div className={styles.vissionandmission_item}>
                        <h3>Our Vision</h3>
                        <p>
                            To be a leading provider of precision CNC machining solutions, recognized for our commitment to quality,To be a globally trusted aerospace manufacturing company, delivering precision-engineered components that advance the future of aviation, defense, and space technologies through innovation, uncompromising quality, and engineering excellence. 
                        </p>
                    </div>
                    <div className={styles.vissionandmission_item}>
                        <h3>Our Mission</h3>
                        <p>
                            To manufacture world-class aerospace components with exceptional precision, reliability, and quality by leveraging advanced manufacturing technologies, skilled expertise, and continuous innovation. We are committed to building long-term partnerships with our customers while supporting the evolving needs of the aerospace industry through timely delivery, operational excellence, and sustainable manufacturing practices.
                        </p>
                    </div>
                </div>
            </div>
            <>
            <Footer />
            </>
        </div>
    );
}
