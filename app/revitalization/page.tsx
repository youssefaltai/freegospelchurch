import Link from "next/link";
import styles from "../Home.module.css";
import revStyles from "./Revitalization.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import heroBackground from "../../public/assets/church.png";

export default function RevitalizationPage() {
  return (
    <>
      <a href="#hero" className={styles["skip-link"]}>
        Skip to main content
      </a>

      <Header />

      <main>
        <section
          className={styles.hero}
          id="hero"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(26, 26, 26, 0.65) 0%, rgba(26, 26, 26, 0.82) 100%), " +
              `url(${heroBackground.src})`,
          }}
        >
          <div className={styles["hero-inner"]}>
            <p className={styles["hero-tagline"]}>
              Preserving History. Serving the Community. Building the Future.
            </p>
          </div>
        </section>

        <section className={revStyles.container}>
          <div className={revStyles.inner}>
            <h2 className={revStyles.title}>
              Revitalizing a Historic Landmark
            </h2>
            <p className={revStyles.text}>
              Located in the heart of the Historic District of the Town of
              Culpeper, the building at 176 E. Davis Street has long served as a
              place of worship, gathering, and community connection. Free Gospel
              Church of Culpeper is embarking on a transformative initiative to
              preserve and revitalize this historic property, ensuring it
              continues to serve the community for generations to come.
            </p>
            <p className={revStyles.text}>
              Through this revitalization effort, we aim to restore the
              building&apos;s historic character while modernizing its
              infrastructure so it can support expanded community services, small
              business activity, and affordable housing opportunities in the
              future.
            </p>
            <p className={revStyles.text}>
              This project represents more than a building renovation — it is an
              investment in community development, historic preservation, and
              long-term neighborhood vitality. By revitalizing this property,
              Free Gospel Church of Culpeper seeks to create a space that can
              support:
            </p>

            <ul className={revStyles.list}>
              <li>Community programs and services</li>
              <li>Educational and mentoring activities</li>
              <li>Small business and entrepreneurial opportunities</li>
              <li>Affordable housing possibilities</li>
              <li>Community gatherings and events</li>
              <li>Historic tours and cultural programming</li>
            </ul>

            <p className={revStyles.text}>
              This vision will transform the building into a multi-purpose
              community asset that strengthens Culpeper&apos;s historic downtown
              while preserving an important piece of local history. The project
              will allow Free Gospel Church of Culpeper to become an even
              stronger anchor institution within the historic district,
              supporting both spiritual and community needs.
            </p>

            <h3 className={revStyles.subtitle}>How You Can Help</h3>
            <p className={revStyles.text}>
              Historic revitalization projects depend on the generosity of
              individuals, organizations, and community partners who believe in
              the importance of preserving our shared heritage.
            </p>
            <p className={revStyles.text}>
              Your support will help fund these efforts that will guide the
              restoration and redevelopment of this historic building.
            </p>
            <p className={revStyles.text}>
              Every contribution brings us one step closer to transforming 176 E.
              Davis Street into a vibrant community resource.
            </p>

            <h3 className={revStyles.subtitle}>Make a Donation</h3>
            <p className={revStyles.text}>
              We invite you to join us in preserving history and building a
              stronger future for Culpeper. Your designated donation will
              support:
            </p>

            <ul className={revStyles.list}>
              <li>Historic preservation planning</li>
              <li>Feasibility study and redevelopment design</li>
              <li>Building infrastructure improvement</li>
              <li>Community programming development</li>
            </ul>

            <p className={revStyles.text}>
              Together, we can ensure that 176 E. Davis Street continues to serve
              the community for generations to come.
            </p>

            <Link href="/giving" className={revStyles["donate-button"]}>
              Donate Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
