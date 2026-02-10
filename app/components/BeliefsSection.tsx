import styles from "../Home.module.css";

export function BeliefsSection() {
  return (
    <section
      className={`${styles["content-section"]} ${styles["content-section--alt"]}`}
      id="beliefs"
    >
      <div className={styles["section-inner"]}>
        <h2>Core Beliefs</h2>
        <p className={styles["beliefs-intro"]}>
          We hold these convictions at the heart of our church life and worship.
        </p>
        <div className={styles["beliefs-bento"]}>
          <div
            className={`${styles["belief-item"]} ${styles["belief-item--wide"]}`}
          >
            <p>
              <span className={styles["belief-lead"]}>
                Worship
              </span>{" "}
              Biblical expressions
              include singing, clapping of hands, audible praise to God, and
              shouting. (Psalm 150)
            </p>
          </div>
          <div className={styles["belief-item"]}>
            <p>
              <span className={styles["belief-lead"]}>
                All are welcome
              </span>{" "}
              — in casual
              clothes or Sunday dress.
            </p>
          </div>
          <div
            className={`${styles["belief-item"]} ${styles["belief-item--wide"]}`}
          >
            <p>
              <span className={styles["belief-lead"]}>
                The church
              </span>{" "}
              is the core of any
              community. We get to know each other both in and outside the four
              walls.
            </p>
          </div>
          <div
            className={`${styles["belief-item"]} ${styles["belief-item--tall"]}`}
          >
            <p>
              <span className={styles["belief-lead"]}>
                Love, grace, mercy.
              </span>{" "}
              We
              believe in showing them.
            </p>
          </div>
          <div className={styles["belief-item"]}>
            <p>
              <span className={styles["belief-lead"]}>
                Faith in action
              </span>{" "}
              — being a
              Christian is both inward and outward expression of God&apos;s
              love.
            </p>
          </div>
          <div
            className={`${styles["belief-item"]} ${styles["belief-item--wide"]}`}
          >
            <p>
              <span className={styles["belief-lead"]}>
                The Bible
              </span>{" "}
              is the inspired and
              only infallible written word of God, a revelation from God to man.
            </p>
          </div>
          <div
            className={`${styles["belief-item"]} ${styles["belief-item--wide"]}`}
          >
            <p>
              <span className={styles["belief-lead"]}>
                One God
              </span>{" "}
              (Deut 6:4–9) — Father
              in creation, Son in redemption, Holy Ghost in the church (1 Tim
              3:16).
            </p>
          </div>
          <div className={styles["belief-item"]}>
            <p>
              <span className={styles["belief-lead"]}>
                Salvation
              </span>{" "}
              is by faith in
              Jesus Christ, not by human works (Eph 2:8–9).
            </p>
          </div>
          <div
            className={`${styles["belief-item"]} ${styles["belief-item--wide"]}`}
          >
            <p>
              <span className={styles["belief-lead"]}>
                Baptism
              </span>{" "}
              by burial with Jesus
              Christ is observed as Commonwealth in the scriptures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

