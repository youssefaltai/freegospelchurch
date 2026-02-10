import styles from "../Home.module.css";

export function MissionVisionSection() {
  return (
    <section
      className={`${styles["content-section"]} ${styles["content-section--mission-vision"]}`}
    >
      <div
        className={`${styles["section-inner"]} ${styles["section-inner--mission-vision"]}`}
      >
        <div className={styles["mission-vision-grid"]}>
          <div className={styles["mission-vision-block"]} id="mission">
            <h2>Mission</h2>
            <p>
              Overwhelmed by the gift of salvation, we have a heart to gather
              to worship as a church body being passionate about entering into
              full fellowship with God&apos;s Kingdom on a mission to see
              God&apos;s kingdom established across the earth.
            </p>
          </div>
          <div className={styles["mission-vision-block"]} id="vision">
            <h2>Vision</h2>
            <p>
              We are called to reintroduce the Kingdom of God on earth to
              mankind through the presence of the Spirit—to restore
              righteousness and holiness to man, and to restore the Holy Spirit
              in mankind. We seek to be retained in the behavior and mindset of
              the Kingdom so we can take charge of our circumstances rather than
              being a slave to them, and to restore the Kingdom rulership of God
              on Earth to mankind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

