import styles from "../Home.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles["site-footer"]}>
      <div className={styles["footer-inner"]}>
        <p className={styles["footer-name"]}>
          Free Gospel Church of Culpeper, Inc.
        </p>
        <p className={styles["footer-copy"]}>
          &copy; <span id="year">{year}</span> Free Gospel Church of Culpeper,
          Inc.
        </p>
      </div>
    </footer>
  );
}

