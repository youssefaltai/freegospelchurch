import styles from "../Home.module.css";
import { Header } from "../components/Header";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import heroBackground from "../../public/assets/church.png";

export default function ContactUsPage() {
  return (
    <>
      <a href="#hero" className={styles["skip-link"]}>
        Skip to main content
      </a>

      <Header variant="simple" />

      <main>
        <section
          className={styles.hero}
          id="hero"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(26, 26, 26, 0.65) 0%, rgba(26, 26, 26, 0.82) 100%), " +
              `url(${heroBackground.src})`,
          }}
        >
          <div className={styles["hero-inner"]}>
            <p className={styles["hero-tagline"]}>
              We&apos;d love to connect with you, pray with you, and help you
              take your next step in Christ.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

