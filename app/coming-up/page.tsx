"use client";

import styles from "../Home.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import heroBackground from "../../public/assets/church.png";
import comingUpStyles from "./ComingUp.module.css";
import { useState } from "react";

interface RecurringEvent {
  id: number;
  title: string;
  time: string;
  location: string;
  description: string;
  daysOfWeek?: number[]; // 0 = Sunday, 1 = Monday, etc.
  isFirstSunday?: boolean; // Special flag for first Sunday events
}

// Real church events - add new events here
const recurringEvents: RecurringEvent[] = [
  {
    id: 1,
    title: "Sunday Morning Service",
    time: "11:00 AM",
    location: "Main Sanctuary",
    description: "Join us every Sunday morning for worship and the Word.",
    daysOfWeek: [0], // Sunday
  },
  {
    id: 2,
    title: "Tuesday Night Prayer & Deliverance",
    time: "7:00 PM",
    location: "Main Sanctuary",
    description: "Subject to change based on season. Join us for prayer and deliverance ministry.",
    daysOfWeek: [2], // Tuesday
  },
  {
    id: 3,
    title: "First Sunday Communion Service",
    time: "11:00 AM",
    location: "Main Sanctuary",
    description: "Every First Sunday we observe Holy Communion together as a church family.",
    isFirstSunday: true,
  },
];

function getEventsForDate(date: Date): RecurringEvent[] {
  const dayOfWeek = date.getDay();
  const events: RecurringEvent[] = [];

  recurringEvents.forEach((event) => {
    // Check if event matches day of week
    if (event.daysOfWeek?.includes(dayOfWeek)) {
      events.push(event);
    }

    // Check if event is first Sunday
    if (event.isFirstSunday && dayOfWeek === 0) {
      const dateNum = date.getDate();
      if (dateNum >= 1 && dateNum <= 7) {
        events.push(event);
      }
    }
  });

  return events;
}

function generateCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days = [];
  let currentDate = new Date(startDate);

  // Generate 42 days (6 weeks) to fill the calendar
  for (let i = 0; i < 42; i++) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
}

export default function ComingUpPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const calendarDays = generateCalendarDays(year, month);
  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

            <div className={comingUpStyles["calendar-header"]}>
              <button
                onClick={handlePrevMonth}
                className={comingUpStyles["month-button"]}
                aria-label="Previous month"
              >
                ←
              </button>
              <h3 className={comingUpStyles["month-title"]}>{monthName}</h3>
              <button
                onClick={handleNextMonth}
                className={comingUpStyles["month-button"]}
                aria-label="Next month"
              >
                →
              </button>
            </div>

            <div className={comingUpStyles["calendar"]}>
              <div className={comingUpStyles["calendar-weekdays"]}>
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className={comingUpStyles["calendar-weekday"]}
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className={comingUpStyles["calendar-days"]}>
                {calendarDays.map((date, index) => {
                  const isCurrentMonth = date.getMonth() === month;
                  const dateNum = date.getDate();
                  const events = getEventsForDate(date);
                  const isToday =
                    date.toDateString() === new Date().toDateString();

                  return (
                    <div
                      key={index}
                      className={`${comingUpStyles["calendar-day"]} ${
                        !isCurrentMonth ? comingUpStyles["other-month"] : ""
                      } ${isToday ? comingUpStyles["today"] : ""}`}
                    >
                      <div className={comingUpStyles["day-number"]}>
                        {dateNum}
                      </div>
                      <div className={comingUpStyles["day-events"]}>
                        {events.map((event) => (
                          <div
                            key={event.id}
                            className={comingUpStyles["event-indicator"]}
                            title={`${event.title} - ${event.time}`}
                          >
                            <span className={comingUpStyles["event-title-short"]}>
                              {event.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={comingUpStyles["events-legend"]}>
              <h3 className={comingUpStyles["legend-title"]}>Events</h3>
              {recurringEvents.map((event) => (
                <div
                  key={event.id}
                  className={comingUpStyles["legend-item"]}
                >
                  <div className={comingUpStyles["legend-content"]}>
                    <p className={comingUpStyles["legend-event-title"]}>
                      {event.title}
                    </p>
                    <p className={comingUpStyles["legend-event-time"]}>
                      {event.time} • {event.location}
                    </p>
                    {event.description && (
                      <p className={comingUpStyles["legend-event-description"]}>
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
