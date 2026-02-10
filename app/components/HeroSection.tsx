import styles from "../Home.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles["hero-inner"]}>
        <p className={styles["hero-tagline"]}>
          Gather. Grow. Go.—Passionate about entering into full fellowship with
          God&apos;s Kingdom.
        </p>
      </div>
    </section>
  );
}

