import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import styles from "../Home.module.css";

type HeaderProps = {
  variant?: "full" | "simple";
};

export function Header({ variant = "full" }: HeaderProps) {
  return (
    <header className={styles["site-header"]}>
      <div className={styles["header-inner"]}>
        <div className={styles["header-brand"]}>
          <Link
            href="/"
            className={styles["logo-link"]}
            aria-label="Free Gospel Church of Culpeper home"
          >
            <Image
              src={logo}
              alt=""
              width={72}
              height={72}
              className={styles["logo-img"]}
              priority
            />
            <h1 className={styles["church-name"]}>
              Free Gospel Church of Culpeper, Inc.
            </h1>
          </Link>
        </div>
        <nav className={styles["main-nav"]} aria-label="Main navigation">
          {variant === "simple" ? (
            <ul>
              <li>
                <Link href="/">Home</Link>
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
                {/* Use Next.js Link so basePath is applied automatically */}
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

