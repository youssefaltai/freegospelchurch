"use client";

import styles from "../Home.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import heroBackground from "../../public/assets/church.png";
import extraStyles from "./Extra.module.css";
import { FormEvent, useState } from "react";

export default function ExtraPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    type: "request" as "request" | "praise",
    intendedFor: "group" as "group" | "everyone",
    description: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    otherAddress: "",
    city: "",
    state: "",
    zipPostal: "",
    country: "United States",
    region: "",
    phone: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/prayer-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          type: "request",
          intendedFor: "group",
          description: "",
          firstName: "",
          lastName: "",
          streetAddress: "",
          otherAddress: "",
          city: "",
          state: "",
          zipPostal: "",
          country: "United States",
          region: "",
          phone: "",
          email: "",
        });
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Failed to submit request. Please try again.");
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
              We&apos;re here to pray with you. Share your prayer request and
              let our community lift you up.
            </p>
          </div>
        </section>

        <section className={extraStyles["prayer-container"]}>
          <div className={extraStyles["prayer-inner"]}>
            <h2 className={extraStyles["prayer-title"]}>Prayer Requests & Praise Reports</h2>

            <p className={extraStyles["prayer-intro"]}>
              If you are in need of prayer, or have something exciting that you
              want to share with the ministry, we welcome you to do that here.
              You can make your posts public or private. All prayer requests,
              anonymous or not, will be sent to our Prayer Team for prayer, and
              if requested, the Ministerial team may also follow up with you.
            </p>

            {isSubmitted ? (
              <div className={extraStyles["success-message"]}>
                <div className={extraStyles["success-icon"]}>Done</div>
                <h3 className={extraStyles["success-title"]}>
                  Thank you for your submission!
                </h3>
                <p className={extraStyles["success-text"]}>
                  We have received your request and our community will be
                  praying with you. God bless you.
                </p>
              </div>
            ) : error ? (
              <div className={extraStyles["error-message"]}>
                <h3 className={extraStyles["error-title"]}>
                  Oops, something went wrong
                </h3>
                <p className={extraStyles["error-text"]}>
                  {error}
                </p>
              </div>
            ) : (
              <form
                className={extraStyles["prayer-form"]}
                onSubmit={handleSubmit}
              >
                <div className={extraStyles["form-group"]}>
                  <fieldset className={extraStyles["radio-group"]}>
                    <legend className={extraStyles["form-label"]}>Type</legend>
                    <div className={extraStyles["radio-option"]}>
                      <input
                        type="radio"
                        id="type-request"
                        name="type"
                        value="request"
                        checked={formData.type === "request"}
                        onChange={(e) =>
                          handleRadioChange("type", e.target.value)
                        }
                        className={extraStyles["radio-input"]}
                      />
                      <label
                        htmlFor="type-request"
                        className={extraStyles["radio-label"]}
                      >
                        Prayer Request
                      </label>
                    </div>
                    <div className={extraStyles["radio-option"]}>
                      <input
                        type="radio"
                        id="type-praise"
                        name="type"
                        value="praise"
                        checked={formData.type === "praise"}
                        onChange={(e) =>
                          handleRadioChange("type", e.target.value)
                        }
                        className={extraStyles["radio-input"]}
                      />
                      <label
                        htmlFor="type-praise"
                        className={extraStyles["radio-label"]}
                      >
                        Praise Report
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className={extraStyles["form-group"]}>
                  <label htmlFor="description" className={extraStyles["form-label"]}>
                    Description <span className={extraStyles["required"]}>*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={extraStyles["form-textarea"]}
                    placeholder={
                      formData.type === "request"
                        ? "Please share your prayer request..."
                        : "Please share your praise report..."
                    }
                  />
                </div>

                <div className={extraStyles["form-group"]}>
                  <fieldset className={extraStyles["radio-group"]}>
                    <legend className={extraStyles["form-label"]}>
                      Intended For <span className={extraStyles["required"]}>*</span>
                    </legend>
                    <div className={extraStyles["radio-option"]}>
                      <input
                        type="radio"
                        id="intended-group"
                        name="intendedFor"
                        value="group"
                        checked={formData.intendedFor === "group"}
                        onChange={(e) =>
                          handleRadioChange("intendedFor", e.target.value)
                        }
                        className={extraStyles["radio-input"]}
                      />
                      <label
                        htmlFor="intended-group"
                        className={extraStyles["radio-label"]}
                      >
                        Appropriate Prayer Group
                      </label>
                    </div>
                    <div className={extraStyles["radio-option"]}>
                      <input
                        type="radio"
                        id="intended-everyone"
                        name="intendedFor"
                        value="everyone"
                        checked={formData.intendedFor === "everyone"}
                        onChange={(e) =>
                          handleRadioChange("intendedFor", e.target.value)
                        }
                        className={extraStyles["radio-input"]}
                      />
                      <label
                        htmlFor="intended-everyone"
                        className={extraStyles["radio-label"]}
                      >
                        Everyone
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className={extraStyles["form-section-title"]}>
                  Contact Information
                </div>

                <div className={extraStyles["form-row"]}>
                  <div className={extraStyles["form-group"]}>
                    <label htmlFor="firstName" className={extraStyles["form-label"]}>
                      First Name <span className={extraStyles["required"]}>*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={extraStyles["form-input"]}
                      placeholder="First name"
                    />
                  </div>

                  <div className={extraStyles["form-group"]}>
                    <label htmlFor="lastName" className={extraStyles["form-label"]}>
                      Last Name <span className={extraStyles["required"]}>*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={extraStyles["form-input"]}
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className={extraStyles["form-group"]}>
                  <label htmlFor="streetAddress" className={extraStyles["form-label"]}>
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className={extraStyles["form-input"]}
                    placeholder="Street address"
                  />
                </div>

                <div className={extraStyles["form-group"]}>
                  <label htmlFor="otherAddress" className={extraStyles["form-label"]}>
                    Other Address
                  </label>
                  <input
                    type="text"
                    id="otherAddress"
                    name="otherAddress"
                    value={formData.otherAddress}
                    onChange={handleChange}
                    className={extraStyles["form-input"]}
                    placeholder="Apt, suite, etc."
                  />
                </div>

                <div className={extraStyles["form-row-3"]}>
                  <div className={extraStyles["form-group"]}>
                    <label htmlFor="city" className={extraStyles["form-label"]}>
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={extraStyles["form-input"]}
                      placeholder="City"
                    />
                  </div>

                  <div className={extraStyles["form-group"]}>
                    <label htmlFor="state" className={extraStyles["form-label"]}>
                      State/Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={extraStyles["form-input"]}
                      placeholder="State or Province"
                    />
                  </div>

                  <div className={extraStyles["form-group"]}>
                    <label htmlFor="zipPostal" className={extraStyles["form-label"]}>
                      Zip/Postal
                    </label>
                    <input
                      type="text"
                      id="zipPostal"
                      name="zipPostal"
                      value={formData.zipPostal}
                      onChange={handleChange}
                      className={extraStyles["form-input"]}
                      placeholder="Zip/Postal code"
                    />
                  </div>
                </div>

                <div className={extraStyles["form-row"]}>
                  <div className={extraStyles["form-group"]}>
                    <label htmlFor="country" className={extraStyles["form-label"]}>
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={extraStyles["form-input"]}
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className={extraStyles["form-group"]}>
                    <label htmlFor="region" className={extraStyles["form-label"]}>
                      Region
                    </label>
                    <input
                      type="text"
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className={extraStyles["form-input"]}
                      placeholder="Region (optional)"
                    />
                  </div>
                </div>

                <div className={extraStyles["form-row"]}>
                  <div className={extraStyles["form-group"]}>
                    <label htmlFor="phone" className={extraStyles["form-label"]}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={extraStyles["form-input"]}
                      placeholder="Phone number"
                    />
                  </div>

                  <div className={extraStyles["form-group"]}>
                    <label htmlFor="email" className={extraStyles["form-label"]}>
                      Email Address <span className={extraStyles["required"]}>*</span>
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
                </div>

                <button
                  type="submit"
                  className={extraStyles["form-button"]}
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
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
