import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { House, Code2, MessageCircle, Layers, Users } from "lucide-react";
import PopUp from "./PopUp";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const ITEMS = [
  { id: "hero",             icon: <House size={18} />,    label: "Home"     },
  { id: "projects-section", icon: <Code2 size={18} />,    label: "Projects" },
  { id: "services-section", icon: <Layers size={18} />,   label: "Services" },
  { id: "team",             icon: <Users size={18} />,    label: "Team"     },
];

function DockItem({ item, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      className={`di ${isActive ? "di-active" : ""}`}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10, scale: 1.22 }}
      whileTap={{ scale: 0.92 }}
      aria-label={item.label}
    >
      <span className="di-icon">{item.icon}</span>

      <AnimatePresence>
        {hovered && (
          <motion.span
            className="di-tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      {isActive && (
        <motion.span className="di-dot" layoutId="dockActiveDot" />
      )}
    </motion.button>
  );
}

export default function Dock() {
  const [active, setActive] = useState("hero");
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    const ids = ITEMS.map(i => i.id);
    const onScroll = () => {
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap');

        /* ── WRAPPER: pinned to bottom, full width, centered ── */
        .dock-wrapper {
          position: fixed;
          bottom: 28px;
          left: 0;
          right: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          z-index: 500;
          pointer-events: none;   /* let clicks pass through the gap */
        }

        /* NAV RAIL */
        .dock-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(8, 14, 26, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          padding: 8px 14px;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow:
            0 8px 40px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(99, 212, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          pointer-events: auto;
        }

        .dock-sep {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.07);
          margin: 0 6px;
          flex-shrink: 0;
        }

        /* DOCK ITEM */
        .di {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.25);
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          flex-shrink: 0;
        }
        .di.di-active {
          background: rgba(99, 212, 255, 0.1);
          border-color: rgba(99, 212, 255, 0.28);
          color: #63d4ff;
        }
        .di-icon { display: flex; align-items: center; justify-content: center; }

        /* Active dot */
        .di-dot {
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #63d4ff;
          box-shadow: 0 0 6px #63d4ff;
        }

        /* Tooltip */
        .di-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: #080e1a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 4px 10px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.66rem;
          font-weight: 500;
          color: #64748b;
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
          z-index: 10;
        }
        .di-tooltip::after {
          content: '';
          position: absolute;
          top: 100%; left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: rgba(255, 255, 255, 0.1);
        }

        /* CTA PILL */
        .dock-cta {
          display: flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #63d4ff 0%, #7c3aed 100%);
          border: none;
          border-radius: 999px;
          padding: 10px 18px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s;
          pointer-events: auto;
        }
        .dock-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255, 255, 255, 0.1);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .dock-cta:hover::before { opacity: 1; }
        .dock-cta:hover {
          box-shadow: 0 0 24px rgba(99,212,255,0.4), 0 4px 20px rgba(124,58,237,0.3);
        }

        @media (max-width: 420px) {
          .dock-cta span:not(svg) { display: none; }
          .dock-cta { padding: 10px 12px; }
          .dock-nav  { padding: 7px 10px; gap: 2px; }
          .di        { width: 36px; height: 36px; }
        }
      `}</style>

      <motion.div
        className="dock-wrapper"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Nav rail */}
        <nav className="dock-nav">
          {ITEMS.map((item, i) => (
            <React.Fragment key={item.id}>
              <DockItem
                item={item}
                isActive={active === item.id}
                onClick={() => scrollTo(item.id)}
              />
              {i === 1 && <span className="dock-sep" />}
            </React.Fragment>
          ))}

          <span className="dock-sep" />

          <DockItem
            item={{ id: "contact", icon: <MessageCircle size={18} />, label: "Contact" }}
            isActive={openPopup}
            onClick={() => setOpenPopup(true)}
          />
        </nav>

        {/* CTA pill */}
        
      </motion.div>

      <PopUp isOpen={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}