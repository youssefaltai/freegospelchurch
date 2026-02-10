import styles from "../Home.module.css";
import { ContactMap } from "./ContactMap";

export function ContactSection() {
  return (
    <section
      className={`${styles["content-section"]} ${styles["content-section--alt"]}`}
      id="contact"
    >
      <div className={styles["section-inner"]}>
        <h2>Contact &amp; Visit</h2>
        <div className={styles["contact-grid"]}>
          <div className={styles["contact-card"]}>
            <p className={styles["contact-intro"]}>
              Located right in the heart of Davis Street. We’d love to see you.
            </p>
            <div className={styles["contact-details"]}>
              <div className={styles["contact-item"]}>
                <span
                  className={styles["contact-item-icon"]}
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className={styles["contact-item-text"]}>
                  <span className={styles["contact-item-label"]}>Address</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=176+East+Davis+Street+Culpeper+VA+22701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["contact-link"]}
                  >
                    176 East Davis Street
                    <br />
                    Culpeper, VA 22701
                  </a>
                </div>
              </div>
              <div className={styles["contact-item"]}>
                <span
                  className={styles["contact-item-icon"]}
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div className={styles["contact-item-text"]}>
                  <span className={styles["contact-item-label"]}>Phone</span>
                  <a
                    href="tel:+15407928090"
                    className={styles["contact-link"]}
                  >
                    540-792-8090
                  </a>
                </div>
              </div>
              <div className={styles["contact-item"]}>
                <span
                  className={styles["contact-item-icon"]}
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div className={styles["contact-item-text"]}>
                  <span className={styles["contact-item-label"]}>Phone</span>
                  <a
                    href="tel:+15402725809"
                    className={styles["contact-link"]}
                  >
                    540-272-5809
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=176+East+Davis+Street+Culpeper+VA+22701"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["contact-directions-btn"]}
            >
              Get directions
            </a>
          </div>
          <div className={styles["contact-map-wrap"]}>
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}

