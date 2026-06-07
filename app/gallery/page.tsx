import styles from "../Home.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GalleryView } from "./GalleryView";
import heroBackground from "../../public/assets/church.png";

export default function GalleryPage() {
  return (
    <>
      <a href="#gallery" className={styles["skip-link"]}>
        Skip to main content
      </a>

      <Header />

      <main>
        <section
          className={styles.hero}
          id="gallery"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(26, 26, 26, 0.65) 0%, rgba(26, 26, 26, 0.82) 100%), " +
              `url(${heroBackground.src})`,
          }}
        >
          <div className={styles["hero-inner"]}>
            <p className={styles["hero-tagline"]}>
              Moments from the life of our church family.
            </p>
          </div>
        </section>

        <section className={styles["content-section"]}>
          <div className={styles["section-inner"]}>
            <GalleryView />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
