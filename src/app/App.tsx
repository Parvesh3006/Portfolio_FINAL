import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import StatsSlider from "./components/StatsSlider";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ResearchSection from "./components/ResearchSection";
import ProjectsSection from "./components/ProjectsSection";
import TechStack from "./components/TechStack";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Track mouse position for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Custom Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed z-50 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #00FF99, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Main Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <StatsSlider />
          <AboutSection />
          <ExperienceSection />
          <ResearchSection />
          <ProjectsSection />
          <TechStack />
          <AchievementsSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}

      {/* Scroll Progress Indicator */}
      {!loading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00FF99] to-[#00D9FF] origin-left z-50"
          style={{
            scaleX: scrollProgress / 100,
          }}
        />
      )}
    </div>
  );
}
