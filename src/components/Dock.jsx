import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  House,
  Code2,
  SquareUserRound,
  MessageCircle,
  Tally1
} from "lucide-react";
import PopUp from "./PopUp";
import { FaTeamspeak } from "react-icons/fa";

/* Smooth scroll helper */
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (!section) return;

  const yOffset = -100;
  const y =
    section.getBoundingClientRect().top +
    window.pageYOffset +
    yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

// eslint-disable-next-line react/prop-types
function DockIcon({ icon, label, targetId, onClick, isActive }) {
  return (
    <motion.div
      className={`dock-item ${isActive ? "active" : ""}`}
      whileHover={{ y: -14, scale: 1.4 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (onClick) onClick();
        else if (targetId) scrollToSection(targetId);
      }}
      role="button"
      aria-label={label}
    >
      <div className="icon-circle">{icon}</div>
      <span className="tooltip">{label}</span>
    </motion.div>
  );
}

export default function Dock() {
  const [openPopup, setOpenPopup] = useState(false);
  const [active, setActive] = useState("hero");

  /* 🔥 Track active section */
  useEffect(() => {
    const sections = ["hero", "projects-section", "team"];

    const onScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="dock-wrapper"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.nav className="dock glass">
          {/* HOME */}
          <DockIcon
            icon={<House size={20} />}
            label="Home"
            targetId="hero"
            isActive={active === "hero"}
          />

          <Tally1 size={25} style={{ marginLeft: 12 }} />

          {/* PROJECTS */}
          <DockIcon
            icon={<Code2 size={20} />}
            label="Projects"
            targetId="projects-section"
            isActive={active === "projects-section"}
          />

          {/* ABOUT */}
          <DockIcon
            icon={<FaTeamspeak size={20} />}
            label="Team"
            targetId="team"
            isActive={active === "team"}
          />

          {/* CONTACT */}
          <DockIcon
            icon={<MessageCircle size={20} />}
            label="Contact"
            onClick={() => setOpenPopup(true)}
            isActive={openPopup}
          />
        </motion.nav>
      </motion.div>

      {/* POPUP */}
      <PopUp
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </>
  );
}
