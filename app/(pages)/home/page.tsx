"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
import Footer from "@/app/components/Footer/Footer";

export default function HomePage() {
    const scrollToSection = () => {
        const section = document.getElementById("capabilities-section");
        if (!section) return;

        const navbarHeight = 70;
        const topPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
    };

    return (
        <div>
            <div className={styles.page}>
                <div className={styles.hero_section_container}>
                    <div className={styles.hero_content}>
                        <p className={styles.hero_kicker}>PRECISION • QUALITY • TRUST</p>
                        <h1 className={styles.title}>
                            Aerospace Precision
                            <span>Components Manufacturer</span>
                        </h1>
                        <p className={styles.hero_description}>
                            Skyedge Aerospace manufactures high-precision aerospace components, delivering superior quality, reliability and performance for a safer tomorrow.
                        </p>
                        <button className={styles.hero_button} onClick={scrollToSection}>
                            Our Capabilities
                        </button>
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

            <div id="capabilities-section" className={styles.capabilities_section_container}>
                <div className={styles.about_us_block}>
                    <p className={styles.section_label}>ABOUT US</p>
                    <h2>Engineering Precision.<br />Powering Aerospace.</h2>
                    <p>
                        Skyedge Aerospace is a trusted manufacturer of high-quality precision components for the aerospace industry. We combine advanced technology, skilled expertise and a strong focus on quality to deliver components that meet the strictest industry standards and customer expectations.
                    </p>
                    <br></br>
                    <Link href="/about" className={styles.learn_more_button}>
                        Learn More
                    </Link>
                </div>

                <div className={styles.capabilities_block}>
                    <p className={styles.section_label}>OUR CAPABILITIES</p>
                    <ul className={styles.capabilities_list}>
                        <li>VMC Milling (3/4 Axis)</li>
                        <li>Precision Milling</li>
                        <li>Precision Components &amp; Assemblies</li>
                        <li>Material Expertise (Aluminium, Stainless Steel, Titanium, Inconel, Copper, Plastic, MS, etc.)</li>
                        <li>In-Process &amp; Final Inspection</li>
                        <li>Traceability &amp; Documentation</li>
                    </ul>
                </div>

                <div className={styles.industries_block}>
                    <p className={styles.section_label}>INDUSTRIES WE SERVE</p>
                    <div className={styles.industries_grid}>
                        <div className={styles.industry_card} style={{ backgroundImage: "linear-gradient(180deg, rgba(15, 30, 49, 0.15), rgba(15, 30, 49, 0.7)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80')" }}>
                            <span>Commercial Aerospace</span>
                        </div>
                        <div className={styles.industry_card} style={{ backgroundImage: "linear-gradient(180deg, rgba(15, 30, 49, 0.15), rgba(15, 30, 49, 0.7)), url('https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=900&q=80')" }}>
                            <span>Mechanical Components</span>
                        </div>
                        <div className={styles.industry_card} style={{ backgroundImage: "linear-gradient(180deg, rgba(15, 30, 49, 0.15), rgba(15, 30, 49, 0.7)), url('https://images.unsplash.com/photo-1553344518-6f9d5d74d5ae?auto=format&fit=crop&w=900&q=80')" }}>
                            <span>Helicopters</span>
                        </div>
                        {/* <div className={styles.industry_card} style={{ backgroundImage: "linear-gradient(180deg, rgba(15, 30, 49, 0.15), rgba(15, 30, 49, 0.7)), url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80')" }}>
                            <span>Space &amp; Satellites</span>
                        </div> */}
                    </div>
                </div>
            </div>
            <div id="whatwedo-section" className={styles.whatwedo_section_container}>
                <div className={styles.whatwedo_content}>
                    <h2>What We Do</h2>
                    <p>
                        At SkyEdge, we specialize in precision VMC milling and machining, delivering high-quality components with tight tolerances. Our state-of-the-art equipment and skilled team ensure that every part meets the highest standards of accuracy and reliability.
                    </p>
                    <p>
                        Driven by innovation and a passion for excellence, we offer end-to-end manufacturing solutions—tailored to meet the evolving needs of diverse industries. Every component we produce reflects our commitment to quality, reliability, and on-time delivery, helping our customers accelerate performance, reduce production challenges, and achieve lasting success. At SkyEdge, we don't just manufacture parts—we build trust, inspire confidence, and deliver precision that powers progress.
                    </p>
                </div>
                <div className={styles.whatwedo_image}>
                    <Image src="/images/shopfloorimage.jpeg" alt="What We Do" width={500} height={350} />
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
                            To be a leading provider of precision VMC milling and machining solutions, recognized for our commitment to quality, and a globally trusted aerospace manufacturing company, delivering precision-engineered components that advance the future of aviation, defense, and space technologies through innovation, uncompromising quality, and engineering excellence. 
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
