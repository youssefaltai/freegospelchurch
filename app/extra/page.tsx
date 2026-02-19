"use client";

import styles from "../Home.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import heroBackground from "../../public/assets/church.png";
import extraStyles from "./Extra.module.css";
import { FormEvent, useState } from "react";

export default function ExtraPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just show success message
    // In the future, you can connect this to a backend
    setIsSubmitted(true);
    setFormData({ name: "", email: "", request: "" });
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

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
              We&apos;re here to pray with you. Share your prayer request and
              let our community lift you up.
            </p>
          </div>
        </section>

        <section className={extraStyles["prayer-container"]}>
          <div className={extraStyles["prayer-inner"]}>
            <h2 className={extraStyles["prayer-title"]}>Prayer Requests</h2>

            <p className={extraStyles["prayer-intro"]}>
              We believe in the power of prayer. If you have a prayer request,
              please share it with us. Our prayer team and community will lift
              your request up to God.
            </p>

            {isSubmitted ? (
              <div className={extraStyles["success-message"]}>
                <div className={extraStyles["success-icon"]}>Done</div>
                <h3 className={extraStyles["success-title"]}>
                  Thank you for your prayer request!
                </h3>
                <p className={extraStyles["success-text"]}>
                  We have received your request and our community will be
                  praying for you. God bless you.
                </p>
              </div>
            ) : (
              <form
                className={extraStyles["prayer-form"]}
                onSubmit={handleSubmit}
              >
                <div className={extraStyles["form-group"]}>
                  <label htmlFor="name" className={extraStyles["form-label"]}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={extraStyles["form-input"]}
                    placeholder="Enter your name"
                  />
                </div>

                <div className={extraStyles["form-group"]}>
                  <label htmlFor="email" className={extraStyles["form-label"]}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={extraStyles["form-input"]}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={extraStyles["form-group"]}>
                  <label htmlFor="request" className={extraStyles["form-label"]}>
                    Your Prayer Request
                  </label>
                  <textarea
                    id="request"
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={extraStyles["form-textarea"]}
                    placeholder="Please share your prayer request..."
                  />
                </div>

                <button
                  type="submit"
                  className={extraStyles["form-button"]}
                >
                  Submit Prayer Request
                </button>
              </form>
            )}

            <section className={extraStyles["info-section"]}>
              <h3 className={extraStyles["info-title"]}>
                How We Handle Your Request
              </h3>
              <ul className={extraStyles["info-list"]}>
                <li>Your request is kept confidential</li>
                <li>Our prayer team reviews all submissions</li>
                <li>We will pray for your request regularly</li>
                <li>You may receive updates via email if you request them</li>
              </ul>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
