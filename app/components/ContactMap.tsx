import styles from "../Home.module.css";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=176+East+Davis+Street+Culpeper+VA+22701&output=embed";

export function ContactMap() {
  return (
    <div className={styles["contact-map"]}>
      <iframe
        className={styles["contact-map-iframe"]}
        src={MAP_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map showing church location at 176 East Davis Street, Culpeper VA"
        allowFullScreen
      />
    </div>
  );
}

