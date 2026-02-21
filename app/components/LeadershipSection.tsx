import Image from "next/image";
import styles from "../Home.module.css";
import haroldPhoto from "../../public/assets/harold.jpeg";
import margaretPhoto from "../../public/assets/margaret.jpeg";

export function LeadershipSection() {
  return (
    <section className={styles["content-section"]} id="leadership">
      <div className={styles["section-inner"]}>
        <h2>Leadership</h2>
        <div className={styles["leadership-grid"]}>
          <article className={styles["leader-block"]}>
            <div className={styles["leader-photo-wrap"]}>
              <Image
                src={haroldPhoto}
                alt="Bishop Harold B. Smith"
                className={styles["leader-photo"]}
                width={320}
                height={400}
                priority
              />
            </div>
            <div className={styles["leader-info"]}>
              <p className={styles["leader-name"]}>Harold B. Smith, Pastor</p>
              <p className={styles["leader-quote"]}>
                "Feed the flock of God which is among you, taking the oversight
                thereof… being ensamples to the flock." — 1 Peter 5:2–3 (KJV)
              </p>
              <p className={styles["leader-bio"]}>
                For 41 years, Pastor Smith has faithfully served as Pastor of
                Free Gospel Church ministries, laboring in the vineyard of the
                Lord with steadfast devotion and a heart for souls. He is
                deeply committed to the full Gospel message and to the
                Spirit-empowered work of making disciples within the local church
                and throughout the surrounding community.
              </p>
              <p className={styles["leader-bio"]}>
                As a preacher and teacher of the infallible Word of God, Pastor
                Smith proclaims the truth of Scripture under the anointing of
                the Holy Spirit, encouraging believers to grow in holiness,
                faith, and obedience to Christ. His ministry reflects a sincere
                love for the people of God, and all are warmly welcomed to
                worship and fellowship.
              </p>
              <p className={styles["leader-bio"]}>
                Pastor Smith has been united in marriage to Margaret L. Smith
                for 58 years. The Lord has blessed their union with three sons
                and one daughter, and they rejoice in God’s continued
                faithfulness to their family and church family alike.
              </p>
            </div>
          </article>
          <article className={styles["leader-block"]}>
            <div className={styles["leader-photo-wrap"]}>
              <Image
                src={margaretPhoto}
                alt="Margaret L. Smith"
                className={styles["leader-photo"]}
                width={320}
                height={400}
              />
            </div>
            <div className={styles["leader-info"]}>
              <p className={styles["leader-name"]}>Margaret L. Smith</p>
              <p className={styles["leader-quote"]}>
                "Her children arise up, and call her blessed… a woman that
                feareth the Lord, she shall be praised." — Proverbs 31:28, 30
                (KJV)
              </p>
              <p className={styles["leader-bio"]}>
                First Lady Margaret L. Smith has faithfully stood alongside
                Pastor Smith for 41 years, serving the Lord and supporting the
                ministry of Free Gospel Church of Culpeper with grace, humility,
                and steadfast faith.
              </p>
              <p className={styles["leader-bio"]}>
                A woman devoted to prayer, family, and the work of the Lord, she
                is a source of encouragement and strength to many. Through her
                quiet dedication and Christ-like spirit, she exemplifies godly
                womanhood and sincere love for the people of God.
              </p>
              <p className={styles["leader-bio"]}>
                "My prayers to God are that all mankind accepts and receive
                Jesus Christ as their personal savior and to know that he is a
                God of Love, Mercy, and Grace."
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

