import styles from "./Home.module.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MissionVisionSection } from "./components/MissionVisionSection";
import { ThemeSection } from "./components/ThemeSection";
import { BeliefsSection } from "./components/BeliefsSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <a href="#hero" className={styles["skip-link"]}>
        Skip to main content
      </a>

      <Header />

      <main>
        <HeroSection />
        <MissionVisionSection />
        <ThemeSection />
        <BeliefsSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
