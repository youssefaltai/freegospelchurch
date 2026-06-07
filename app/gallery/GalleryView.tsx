"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../Home.module.css";
import { galleryEvents } from "./galleryData";

const flat = galleryEvents.flatMap((event) =>
  event.photos.map((photo) => ({ ...photo, eventLabel: event.label })),
);

export function GalleryView() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + delta + flat.length) % flat.length,
      ),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, step]);

  let cursor = 0;
  const current = openIndex === null ? null : flat[openIndex];

  return (
    <>
      {galleryEvents.map((event) => (
        <section className={styles["gallery-event"]} key={event.id}>
          <h2 className={styles["gallery-event-title"]}>{event.label}</h2>
          <ul className={styles["gallery-grid"]}>
            {event.photos.map((photo) => {
              const index = cursor++;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className={styles["gallery-item"]}
                    onClick={() => setOpenIndex(index)}
                    aria-label={`Open photo: ${photo.alt}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      className={styles["gallery-thumb"]}
                      placeholder="blur"
                      sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {current && (
        <div
          className={styles["lightbox"]}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.eventLabel} photo`}
          onClick={close}
        >
          <button
            type="button"
            className={`${styles["lightbox-btn"]} ${styles["lightbox-close"]}`}
            onClick={close}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            type="button"
            className={`${styles["lightbox-btn"]} ${styles["lightbox-prev"]}`}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          <figure
            className={styles["lightbox-figure"]}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              className={styles["lightbox-img"]}
              placeholder="blur"
              sizes="100vw"
            />
            <figcaption className={styles["lightbox-caption"]}>
              {current.eventLabel}
            </figcaption>
          </figure>
          <button
            type="button"
            className={`${styles["lightbox-btn"]} ${styles["lightbox-next"]}`}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
