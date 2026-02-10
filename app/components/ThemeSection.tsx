import styles from "../Home.module.css";

export function ThemeSection() {
  return (
    <section className={styles["content-section"]} id="theme">
      <div className={styles["section-inner"]}>
        <h2>Theme &amp; Strategy</h2>
        <p className={styles["theme-lead"]}>
          Our path as a church: three rhythms that shape everything we do.
        </p>
        <div className={styles["theme-flow"]}>
          <article className={styles["theme-panel"]}>
            <span className={styles["theme-num"]} aria-hidden="true">
              01
            </span>
            <h3 className={styles["theme-word"]}>Gather</h3>
            <p className={styles["theme-desc"]}>
              Focus on connecting through church and worship experiences where
              we develop relationships with Christ and with each other.
            </p>
          </article>
          <div className={styles["theme-arrow"]} aria-hidden="true" />
          <article className={styles["theme-panel"]}>
            <span className={styles["theme-num"]} aria-hidden="true">
              02
            </span>
            <h3 className={styles["theme-word"]}>Grow</h3>
            <p className={styles["theme-desc"]}>
              Learn more about God and his impact on our daily lives.
            </p>
          </article>
          <div className={styles["theme-arrow"]} aria-hidden="true" />
          <article className={styles["theme-panel"]}>
            <span className={styles["theme-num"]} aria-hidden="true">
              03
            </span>
            <h3 className={styles["theme-word"]}>Go</h3>
            <p className={styles["theme-desc"]}>
              Make disciples and be disciples in our community.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

