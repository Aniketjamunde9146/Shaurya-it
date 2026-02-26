import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Dock from "./components/Dock";
import ScrollToggle from "./components/ScrollToggle";
import PopUp from "./components/PopUp";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Services from "./sections/Services";
import Tech from "./sections/Tech";
import Process from "./sections/Process";
import OurTeam from "./sections/OurTeam";
import WhyChooseUs from "./sections/WhyChooseUs";
import Inquiry from "./sections/Inquiry";
import Footer from "./sections/Footer";
import "./App.css";

const SPLASH_DURATION = 3200;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), SPLASH_DURATION);
    return () => clearTimeout(t);
  }, []);

  const openContact = () => setOpenPopup(true);
  const closeContact = () => setOpenPopup(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Splash key="splash" />}
      </AnimatePresence>

      {!loading && (
        <div className="app-root">
          {/* Fixed UI */}
          <Navbar onContactClick={openContact} />
          <ScrollToggle />
          <Dock onContactClick={openContact} />

          {/* Page sections */}
          <main>
            <Hero onStartProject={openContact} />
            <Project/>
            <Services />
            <Tech />
            <Process />
            <OurTeam />
            <WhyChooseUs />
            <Inquiry />
            <Footer />
          </main>

          {/* Global contact popup */}
          <PopUp isOpen={openPopup} onClose={closeContact} />
        </div>
      )}
    </>
  );
}