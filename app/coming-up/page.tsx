import styles from "../Home.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import heroBackground from "../../public/assets/church.png";
import comingUpStyles from "./ComingUp.module.css";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Sunday Service",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Main Sanctuary",
    description: "Join us for our weekly Sunday worship service and fellowship.",
  },
  {
    id: 2,
    title: "Midweek Bible Study",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Fellowship Hall",
    description: "Deep dive into Scripture with our community of believers.",
  },
  {
    id: 3,
    title: "Youth Group Meeting",
    date: "Every Friday",
    time: "6:00 PM",
    location: "Youth Center",
    description: "Games, discussion, and fellowship for our young adults.",
  },
  {
    id: 4,
    title: "Prayer Gathering",
    date: "First Tuesday of each month",
    time: "6:30 PM",
    location: "Prayer Room",
    description: "Come join us as we lift up our church and community in prayer.",
  },
];

export default function ComingUpPage() {
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
              See what&apos;s happening at Free Gospel Church. Join us for
              worship, study, and fellowship.
            </p>
          </div>
        </section>

        <section className={comingUpStyles["events-container"]}>
          <div className={comingUpStyles["events-inner"]}>
            <h2 className={comingUpStyles["events-title"]}>Coming Up</h2>

            <div className={comingUpStyles["events-list"]}>
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className={comingUpStyles["event-card"]}
                >
                  <div className={comingUpStyles["event-header"]}>
                    <h3 className={comingUpStyles["event-title"]}>
                      {event.title}
                    </h3>
                    <div className={comingUpStyles["event-meta"]}>
                      <span className={comingUpStyles["event-date"]}>
                        {event.date}
                      </span>
                      <span className={comingUpStyles["event-time"]}>
                        {event.time}
                      </span>
                    </div>
                  </div>

                  <div className={comingUpStyles["event-details"]}>
                    <p className={comingUpStyles["event-location"]}>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p className={comingUpStyles["event-description"]}>
                      {event.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
