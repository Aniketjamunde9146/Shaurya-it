import { useState, useEffect } from "react";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Dock from "./components/Dock";
import ScrollToggle from "./components/ScrollToggle";
import "./App.css";
import Project from "./sections/Project";
import Services from "./sections/services";
import Tech from "./sections/Tech";
import Process from "./sections/Process";
import WhyChooseUs from "./sections/WhyChooseUs";
import Inquiry from "./sections/Inquiry";
import Footer from "./sections/Footer";
import OurTeam from "./sections/OurTeam";
import PopUp from "./components/PopUp";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Splash />;

  return (
    <div className="app-container">
      <Navbar onContactClick={() => setOpenPopup(true)} />

      <ScrollToggle />

      {/* HERO BUTTON OPENS POPUP */}
      <Hero onStartProject={() => setOpenPopup(true)} />

      <Project />
      <Services />
      <Tech />
      <Process />
      <OurTeam />
      <WhyChooseUs />
      <Inquiry />
      <Footer />

      {/* DOCK CONTACT OPENS POPUP */}
      <Dock onContactClick={() => setOpenPopup(true)} />

      {/* POPUP */}
      <PopUp
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </div>
  );
}
