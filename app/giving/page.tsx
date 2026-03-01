"use client";

import styles from "../Home.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import heroBackground from "../../public/assets/church.png";
import givingStyles from "./Giving.module.css";
import { FormEvent, useState } from "react";

export default function GivingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    amount: "",
    givingType: "tithe" as "tithe" | "offering",
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGivingTypeChange = (givingType: "tithe" | "offering") => {
    setFormData((prev) => ({
      ...prev,
      givingType,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/giving", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          amount: "",
          givingType: "tithe",
          name: "",
          email: "",
        });
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsLoading(false);
    }
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
              Your generosity helps us continue our mission to serve our
              community and grow God&apos;s kingdom.
            </p>
          </div>
        </section>

        <section className={givingStyles["giving-container"]}>
          <div className={givingStyles["giving-inner"]}>
            <h2 className={givingStyles["giving-title"]}>Give Now</h2>

            <p className={givingStyles["giving-intro"]}>
              Your giving allows our ministry to continue supporting the
              community and the church's operations. Through your giving, we're
              able to continue providing services that can assist you and your
              family, and persons that may be in need.
            </p>

            {isSubmitted ? (
              <div className={givingStyles["success-message"]}>
                <div className={givingStyles["success-icon"]}>Done</div>
                <h3 className={givingStyles["success-title"]}>
                  Thank you for your gift!
                </h3>
                <p className={givingStyles["success-text"]}>
                  We have received your contribution. Your generosity will make
                  a real difference in our ministry. God bless you.
                </p>
              </div>
            ) : error ? (
              <div className={givingStyles["error-message"]}>
                <h3 className={givingStyles["error-title"]}>
                  Oops, something went wrong
                </h3>
                <p className={givingStyles["error-text"]}>
                  {error}
                </p>
              </div>
            ) : (
              <form
                className={givingStyles["giving-form"]}
                onSubmit={handleSubmit}
              >
                <div className={givingStyles["form-group"]}>
                  <label htmlFor="amount" className={givingStyles["form-label"]}>
                    Amount
                  </label>
                  <div className={givingStyles["amount-group"]}>
                    <span className={givingStyles["amount-prefix"]}>$</span>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      step="0.01"
                      min="0"
                      className={givingStyles["form-input"]}
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className={givingStyles["form-group"]}>
                  <label className={givingStyles["form-label"]}>Type</label>
                  <div className={givingStyles["toggle-group"]}>
                    <button
                      type="button"
                      className={`${givingStyles["toggle-btn"]} ${
                        formData.givingType === "tithe"
                          ? givingStyles["active"]
                          : ""
                      }`}
                      onClick={() => handleGivingTypeChange("tithe")}
                    >
                      Tithes
                    </button>
                    <button
                      type="button"
                      className={`${givingStyles["toggle-btn"]} ${
                        formData.givingType === "offering"
                          ? givingStyles["active"]
                          : ""
                      }`}
                      onClick={() => handleGivingTypeChange("offering")}
                    >
                      Offering
                    </button>
                  </div>
                </div>

                <div className={givingStyles["form-group"]}>
                  <label htmlFor="name" className={givingStyles["form-label"]}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={givingStyles["form-input"]}
                    placeholder="Enter your name"
                  />
                </div>

                <div className={givingStyles["form-group"]}>
                  <label htmlFor="email" className={givingStyles["form-label"]}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={givingStyles["form-input"]}
                    placeholder="your.email@example.com"
                  />
                </div>

                <button
                  type="submit"
                  className={givingStyles["form-button"]}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Give Now"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
