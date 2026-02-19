import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import styles from "../Home.module.css";

export function Header() {
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
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/coming-up">Coming Up</Link>
            </li>
            <li>
              <Link href="/giving">Giving</Link>
            </li>
            <li>
              <Link href="/extra">Prayer Requests</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

