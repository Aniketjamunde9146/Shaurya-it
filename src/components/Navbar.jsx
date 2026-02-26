import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Services",  href: "#services-section"  },
  { label: "Projects",  href: "#projects-section"  },
  { label: "Process",   href: "#process-section"   },
  { label: "Tech",      href: "#tech-section"      },
  { label: "Team",      href: "#team"              },
];

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;500;600&display=swap');

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 400;
          display: flex;
          justify-content: center;
          padding: 20px 5vw 0;
          pointer-events: none;
        }
        .nav-inner {
          width: 100%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 10px 20px 10px 16px;
          border-radius: 999px;
          pointer-events: auto;
          transition: background 0.4s, border-color 0.4s, box-shadow 0.4s;
          font-family: 'Outfit', sans-serif;
        }
        .nav-inner.scrolled {
          background: rgba(8,14,26,0.88);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,212,255,0.05);
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          cursor: pointer;
          flex-shrink: 0;
        }
        .nav-logo img {
          width: 32px; height: 32px;
          border-radius: 8px;
          object-fit: contain;
        }
        .nav-logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.15rem;
          letter-spacing: 0.06em;
          color: #f0f6ff;
          line-height: 1;
        }
        .nav-logo-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1e3248;
          line-height: 1;
          margin-top: 1px;
        }

        /* Links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .nav-link {
          font-size: 0.78rem;
          font-weight: 500;
          color: #3d5470;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 999px;
          transition: color 0.2s, background 0.2s;
          letter-spacing: 0.02em;
        }
        .nav-link:hover { color: #e2e8f0; background: rgba(255,255,255,0.05); }

        /* CTA */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #63d4ff, #7c3aed);
          border: none;
          border-radius: 999px;
          padding: 9px 18px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s;
        }
        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.1);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .nav-cta:hover::before { opacity: 1; }
        .nav-cta:hover { box-shadow: 0 0 24px rgba(99,212,255,0.35); }

        /* Mobile toggle */
        .nav-mobile-btn {
          display: none;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          width: 36px; height: 36px;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nav-mobile-btn:hover { color: #e2e8f0; }

        /* Mobile menu */
        .nav-mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(4,7,15,0.97);
          backdrop-filter: blur(16px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: 'Outfit', sans-serif;
        }
        .mobile-link {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
          letter-spacing: 0.06em;
          color: #3d5470;
          text-decoration: none;
          transition: color 0.2s;
        }
        .mobile-link:hover { color: #63d4ff; }
        .mobile-close {
          position: absolute;
          top: 24px; right: 24px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50%;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          color: #3d5470;
          cursor: pointer;
          transition: all 0.2s;
        }
        .mobile-close:hover { color: #e2e8f0; }
        .mobile-cta {
          margin-top: 20px;
          background: linear-gradient(135deg, #63d4ff, #7c3aed);
          border: none;
          border-radius: 999px;
          padding: 13px 32px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 720px) {
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .nav-mobile-btn { display: flex; }
        }
      `}</style>

      <motion.div className="nav-root" initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        <div className={`nav-inner ${scrolled ? "scrolled" : ""}`}>
          {/* Logo */}
          <a className="nav-logo" href="#hero" onClick={e => handleLink(e, "#hero")}>
            <img src={logo} alt="Shaurya IT" />
            <div>
              <div className="nav-logo-text">Shaurya IT</div>
              <div className="nav-logo-sub">Services</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map(l => (
              <li key={l.label}>
                <a className="nav-link" href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button className="nav-cta" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={onContactClick}>
            <MessageCircle size={13} /> Let's Talk
          </motion.button>

          {/* Mobile btn */}
          <button className="nav-mobile-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={17} />
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div className="nav-mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="mobile-close" onClick={() => setMobileOpen(false)}><X size={15} /></button>
          {NAV_LINKS.map((l, i) => (
            <motion.a key={l.label} className="mobile-link" href={l.href} onClick={e => handleLink(e, l.href)}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              {l.label}
            </motion.a>
          ))}
          <motion.button className="mobile-cta" onClick={() => { setMobileOpen(false); onContactClick(); }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <MessageCircle size={14} /> Let's Talk
          </motion.button>
        </motion.div>
      )}
    </>
  );
}

Navbar.propTypes = { onContactClick: PropTypes.func.isRequired };