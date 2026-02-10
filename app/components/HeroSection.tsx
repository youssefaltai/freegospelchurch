import styles from "../Home.module.css";
import heroBackground from "../../public/assets/church.png";

export function HeroSection() {
  return (
    <section
      className={styles.hero}
      id="hero"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(26, 26, 26, 0.65) 0%, rgba(26, 26, 26, 0.82) 100%), ' +
          `url(${heroBackground.src})`,
      }}
    >
      <div className={styles["hero-inner"]}>
        <p className={styles["hero-tagline"]}>
          Gather. Grow. Go.—Passionate about entering into full fellowship with
          God&apos;s Kingdom.
        </p>
      </div>
    </section>
  );
}

