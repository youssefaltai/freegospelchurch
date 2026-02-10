import Image from "next/image";
import styles from "../Home.module.css";

export function LeadershipSection() {
  return (
    <section className={styles["content-section"]} id="leadership">
      <div className={styles["section-inner"]}>
        <h2>Leadership</h2>
        <div className={styles["leadership-grid"]}>
          <article className={styles["leader-block"]}>
            <div className={styles["leader-photo-wrap"]}>
              <Image
                src="/assets/harold.jpeg"
                alt="Bishop Harold B. Smith"
                className={styles["leader-photo"]}
                width={320}
                height={400}
                priority
              />
            </div>
            <div className={styles["leader-info"]}>
              <p className={styles["leader-name"]}>Bishop Harold B. Smith</p>
              <p className={styles["leader-bio"]}>
                Pastor of the Free Gospel Church, Inc. for 41 years, he is a
                dedicated shepherd focused on making disciples in the local
                church and supporting the surrounding community. A preacher and
                teacher of God’s Word, Pastor Smith loves the people of God—all
                are welcome when you visit. He married Margaret L. Smith 58
                years ago; they have 3 sons and 1 daughter.
              </p>
            </div>
          </article>
          <article className={styles["leader-block"]}>
            <div className={styles["leader-photo-wrap"]}>
              <Image
                src="/assets/margaret.jpeg"
                alt="Margaret L. Smith"
                className={styles["leader-photo"]}
                width={320}
                height={400}
              />
            </div>
            <div className={styles["leader-info"]}>
              <p className={styles["leader-name"]}>Margaret L. Smith</p>
              <p className={styles["leader-bio"]}>
                The motherly example who sets the atmosphere at the church. She
                has labored tirelessly for the Lord beside her husband, devoted
                to praying for and with souls. Her spirit of hospitality is
                known to all.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

