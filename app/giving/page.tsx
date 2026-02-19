import styles from "../Home.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import heroBackground from "../../public/assets/church.png";
import givingStyles from "./Giving.module.css";

interface GivingMethod {
  id: number;
  title: string;
  description: string;
  icon: string;
  action: string;
  href?: string;
}

const givingMethods: GivingMethod[] = [
  {
    id: 1,
    title: "Online Giving",
    description: "Give securely through our online giving platform.",
    icon: "",
    action: "Give Online",
    href: "#", // Replace with actual link
  },
  {
    id: 2,
    title: "Venmo",
    description: "Send your gift directly through Venmo.",
    icon: "",
    action: "Give via Venmo",
    href: "#", // Replace with actual Venmo link
  },
  {
    id: 3,
    title: "PayPal",
    description: "Donate securely using your PayPal account.",
    icon: "",
    action: "Give via PayPal",
    href: "#", // Replace with actual PayPal link
  },
  {
    id: 4,
    title: "Bank Transfer",
    description: "Set up automatic giving or send a one-time transfer.",
    icon: "",
    action: "Learn More",
    href: "#", // Replace with contact info
  },
];

export default function GivingPage() {
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
              Your generosity helps us continue our mission to serve our
              community and grow God&apos;s kingdom.
            </p>
          </div>
        </section>

        <section className={givingStyles["giving-container"]}>
          <div className={givingStyles["giving-inner"]}>
            <h2 className={givingStyles["giving-title"]}>Ways to Give</h2>

            <p className={givingStyles["giving-intro"]}>
              Thank you for prayerfully considering how you can support the
              ministry of Free Gospel Church. Whether through online giving,
              mobile payment, or traditional methods, your contribution makes a
              difference in our community.
            </p>

            <div className={givingStyles["methods-grid"]}>
              {givingMethods.map((method) => (
                <div key={method.id} className={givingStyles["method-card"]}>
                  <div className={givingStyles["method-icon"]}>
                    {method.icon}
                  </div>
                  <h3 className={givingStyles["method-title"]}>
                    {method.title}
                  </h3>
                  <p className={givingStyles["method-description"]}>
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    className={givingStyles["method-button"]}
                  >
                    {method.action}
                  </a>
                </div>
              ))}
            </div>

            <section className={givingStyles["info-section"]}>
              <h3 className={givingStyles["info-title"]}>Questions?</h3>
              <p className={givingStyles["info-text"]}>
                If you have questions about giving or need assistance, please
                don&apos;t hesitate to{" "}
                <a href="/contact-us" className={givingStyles["info-link"]}>
                  contact us
                </a>
                . All gifts are tax-deductible. Free Gospel Church is a
                501(c)(3) non-profit organization.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
