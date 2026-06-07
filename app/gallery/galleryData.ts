import type { StaticImageData } from "next/image";

import md01 from "../../public/assets/gallery/mothers-day-2026/01.jpeg";
import md02 from "../../public/assets/gallery/mothers-day-2026/02.jpeg";
import md03 from "../../public/assets/gallery/mothers-day-2026/03.jpeg";
import md04 from "../../public/assets/gallery/mothers-day-2026/04.jpeg";
import md05 from "../../public/assets/gallery/mothers-day-2026/05.jpg";

export type GalleryPhoto = {
  src: StaticImageData;
  alt: string;
};

export type GalleryEvent = {
  id: string;
  label: string;
  photos: GalleryPhoto[];
};

export const galleryEvents: GalleryEvent[] = [
  {
    id: "mothers-day-2026",
    label: "Mother's Day 2026",
    photos: [
      { src: md01, alt: "Bishop Smith leading the Mother's Day service from the pulpit" },
      { src: md02, alt: "Mothers honored at the front of the sanctuary on Mother's Day" },
      { src: md03, alt: "Mother's Day service in the church sanctuary" },
      { src: md04, alt: "Bishop and Margaret Smith during the Mother's Day service" },
      { src: md05, alt: "Two mothers outside the Free Gospel Church of Culpeper" },
    ],
  },
];
