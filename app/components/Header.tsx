import Image from "next/image";
import styles from "../Home.module.css";

type HeaderProps = {
  variant?: "full" | "simple";
};

export function Header({ variant = "full" }: HeaderProps) {
  return (
    <header className={styles["site-header"]}>
      <div className={styles["header-inner"]}>
        <div className={styles["header-brand"]}>
          <a
            href="#hero"
            className={styles["logo-link"]}
            aria-label="Free Gospel Church of Culpeper home"
          >
            <Image
              src="/assets/logo.png"
              alt=""
              width={72}
              height={72}
              className={styles["logo-img"]}
              priority
            />
            <h1 className={styles["church-name"]}>
              Free Gospel Church of Culpeper, Inc.
            </h1>
          </a>
        </div>
        <nav className={styles["main-nav"]} aria-label="Main navigation">
          {variant === "simple" ? (
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <a href="#mission">Mission</a>
              </li>
              <li>
                <a href="#vision">Vision</a>
              </li>
              <li>
                <a href="#theme">Gather, Grow, Go</a>
              </li>
              <li>
                <a href="#beliefs">Beliefs</a>
              </li>
              <li>
                <a href="#leadership">Leadership</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

