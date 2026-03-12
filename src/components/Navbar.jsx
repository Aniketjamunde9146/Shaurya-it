import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, MessageCircle, Zap } from "lucide-react";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Services",  href: "#services-section", num: "01" },
  { label: "Projects",  href: "#projects-section", num: "02" },
  { label: "Process",   href: "#process-section",  num: "03" },
  { label: "Tech",      href: "#tech-section",     num: "04" },
  { label: "Team",      href: "#team",             num: "05" },
];

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeLink, setActiveLink]   = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [ripples, setRipples]         = useState([]);
  const navRef = useRef(null);

  // Magnetic cursor tracking for CTA
  const ctaX = useMotionValue(0);
  const ctaY = useMotionValue(0);
  const springX = useSpring(ctaX, { stiffness: 200, damping: 20 });
  const springY = useSpring(ctaY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (e, href, label) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveLink(label);
    const el = document.querySelector(href);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleCtaMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    ctaX.set((e.clientX - cx) * 0.3);
    ctaY.set((e.clientY - cy) * 0.3);
  };
  const handleCtaMouseLeave = () => {
    ctaX.set(0);
    ctaY.set(0);
  };

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(r => [...r, { id, x, y }]);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 700);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Orb glow behind nav ── */
        .nav-orb {
          position: fixed;
          top: -60px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 140px;
          background: radial-gradient(ellipse, rgba(99,212,255,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 75%);
          pointer-events: none;
          z-index: 399;
          filter: blur(2px);
          transition: opacity 0.5s;
        }
        .nav-orb.hidden { opacity: 0; }

        /* ── Root wrapper ── */
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 400;
          display: flex;
          justify-content: center;
          padding: 18px 5vw 0;
          pointer-events: none;
        }

        /* ── Pill container ── */
        .nav-pill {
          width: 100%;
          max-width: 1160px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 8px 8px 8px 18px;
          border-radius: 999px;
          pointer-events: auto;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;

          /* glass base */
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.5s, border-color 0.5s, box-shadow 0.5s;
        }
        .nav-pill.scrolled {
          background: rgba(6,10,22,0.72);
          border-color: rgba(99,212,255,0.15);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          box-shadow:
            0 8px 40px rgba(0,0,0,0.5),
            0 0 0 1px rgba(99,212,255,0.06),
            inset 0 1px 0 rgba(255,255,255,0.06),
            inset 0 -1px 0 rgba(0,0,0,0.3);
        }

        /* shimmer line at top of pill */
        .nav-pill::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,212,255,0.5), rgba(124,58,237,0.4), transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .nav-pill.scrolled::before { opacity: 1; }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          cursor: pointer;
          flex-shrink: 0;
          position: relative;
        }
        .nav-logo-img-wrap {
          position: relative;
          width: 34px; height: 34px;
        }
        .nav-logo-img-wrap::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 12px;
          background: conic-gradient(from 0deg, #63d4ff, #7c3aed, #63d4ff);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
          animation: spin 3s linear infinite;
        }
        .nav-logo:hover .nav-logo-img-wrap::after { opacity: 1; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .nav-logo img {
          width: 34px; height: 34px;
          border-radius: 10px;
          object-fit: contain;
          display: block;
          position: relative;
          z-index: 1;
        }
        .nav-logo-wordmark {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .nav-logo-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.05rem;
          letter-spacing: -0.01em;
          color: #f0f6ff;
          line-height: 1;
          background: linear-gradient(135deg, #fff 30%, #63d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-logo-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(99,212,255,0.45);
          line-height: 1;
        }

        /* ── Nav links ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .nav-link-wrap {
          position: relative;
        }
        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(180,200,230,0.45);
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.25s;
          position: relative;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .nav-link-num {
          font-size: 0.5rem;
          font-weight: 600;
          color: rgba(99,212,255,0.3);
          letter-spacing: 0.05em;
          transition: color 0.25s;
        }
        .nav-link:hover { color: #e8f4ff; }
        .nav-link:hover .nav-link-num { color: #63d4ff; }
        .nav-link.active { color: #fff; }
        .nav-link.active .nav-link-num { color: #63d4ff; }

        /* hover pill bg */
        .nav-hover-bg {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(8px);
        }

        /* active underline dot */
        .nav-link-dot {
          position: absolute;
          bottom: 2px; left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #63d4ff;
          box-shadow: 0 0 8px #63d4ff;
        }

        /* ── CTA button ── */
        .nav-cta-wrap {
          position: relative;
          flex-shrink: 0;
        }
        .nav-cta {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
          overflow: hidden;
          background: transparent;
          white-space: nowrap;
        }

        /* multi-layer glow border */
        .nav-cta-border {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          padding: 1.5px;
          background: linear-gradient(135deg, #63d4ff, #7c3aed, #ff6fd8, #63d4ff);
          background-size: 300% 300%;
          animation: gradShift 4s ease infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        @keyframes gradShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .nav-cta-fill {
          position: absolute;
          inset: 1.5px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(99,212,255,0.15), rgba(124,58,237,0.2));
          backdrop-filter: blur(12px);
          transition: background 0.3s;
        }
        .nav-cta:hover .nav-cta-fill {
          background: linear-gradient(135deg, rgba(99,212,255,0.25), rgba(124,58,237,0.35));
        }
        .nav-cta-glow {
          position: absolute;
          inset: -4px;
          border-radius: 999px;
          background: linear-gradient(135deg, #63d4ff, #7c3aed);
          opacity: 0;
          filter: blur(12px);
          transition: opacity 0.3s;
          z-index: -1;
        }
        .nav-cta:hover .nav-cta-glow { opacity: 0.4; }

        .nav-cta-text {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .nav-cta-icon {
          width: 18px; height: 18px;
          background: linear-gradient(135deg, #63d4ff, #7c3aed);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ripple */
        .nav-cta-ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(99,212,255,0.25);
          transform: scale(0);
          animation: rippleAnim 0.7s ease-out forwards;
          pointer-events: none;
          z-index: 1;
        }
        @keyframes rippleAnim {
          to { transform: scale(4); opacity: 0; }
        }

        /* ── Mobile toggle ── */
        .nav-mobile-btn {
          display: none;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          width: 38px; height: 38px;
          align-items: center;
          justify-content: center;
          color: rgba(99,212,255,0.6);
          cursor: pointer;
          transition: all 0.25s;
          flex-shrink: 0;
          backdrop-filter: blur(8px);
        }
        .nav-mobile-btn:hover {
          background: rgba(99,212,255,0.08);
          border-color: rgba(99,212,255,0.2);
          color: #63d4ff;
        }

        /* ── Mobile fullscreen ── */
        .nav-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 10vw;
          overflow: hidden;
        }
        .nav-mobile-bg {
          position: absolute;
          inset: 0;
          background: rgba(3,6,16,0.96);
          backdrop-filter: blur(30px) saturate(120%);
          -webkit-backdrop-filter: blur(30px) saturate(120%);
        }
        /* animated gradient blobs in mobile */
        .nav-mobile-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .nav-mobile-blob-1 {
          width: 400px; height: 400px;
          top: -100px; right: -100px;
          background: rgba(99,212,255,0.07);
          animation: blobFloat1 8s ease-in-out infinite;
        }
        .nav-mobile-blob-2 {
          width: 300px; height: 300px;
          bottom: -80px; left: -80px;
          background: rgba(124,58,237,0.08);
          animation: blobFloat2 10s ease-in-out infinite;
        }
        @keyframes blobFloat1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(1.1); }
        }
        @keyframes blobFloat2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,-30px) scale(0.9); }
        }

        /* grid overlay in mobile */
        .nav-mobile-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,212,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .nav-mobile-close {
          position: absolute;
          top: 28px; right: 28px;
          width: 42px; height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(180,200,230,0.5);
          cursor: pointer;
          z-index: 2;
          transition: all 0.25s;
          backdrop-filter: blur(8px);
        }
        .nav-mobile-close:hover {
          color: #63d4ff;
          border-color: rgba(99,212,255,0.3);
          background: rgba(99,212,255,0.08);
        }

        .mobile-nav-num {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(99,212,255,0.3);
          letter-spacing: 0.15em;
          margin-bottom: 4px;
          display: block;
        }
        .mobile-link {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 8vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: rgba(180,200,230,0.2);
          text-decoration: none;
          display: block;
          margin-bottom: 4px;
          line-height: 1;
          transition: color 0.25s, letter-spacing 0.25s;
          position: relative;
          z-index: 2;
        }
        .mobile-link:hover {
          color: #f0f6ff;
          letter-spacing: -0.01em;
        }
        .mobile-link-inner {
          position: relative;
          display: inline-block;
        }
        .mobile-link-inner::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          background: linear-gradient(135deg, #63d4ff, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .mobile-link:hover .mobile-link-inner::after { opacity: 1; }

        .mobile-divider {
          width: 40px; height: 1px;
          background: rgba(99,212,255,0.15);
          margin: 20px 0;
          position: relative;
          z-index: 2;
        }

        .mobile-cta {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 999px;
          border: 1.5px solid rgba(99,212,255,0.3);
          background: rgba(99,212,255,0.06);
          backdrop-filter: blur(12px);
          font-family: 'Syne', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: #63d4ff;
          cursor: pointer;
          letter-spacing: 0.03em;
          transition: all 0.3s;
          margin-top: 10px;
        }
        .mobile-cta:hover {
          background: rgba(99,212,255,0.12);
          border-color: rgba(99,212,255,0.5);
          box-shadow: 0 0 30px rgba(99,212,255,0.15);
        }

        @media (max-width: 720px) {
          .nav-links, .nav-cta-wrap { display: none; }
          .nav-mobile-btn { display: flex; }
        }
      `}</style>

      {/* Orb glow behind navbar */}
      <div className={`nav-orb ${scrolled ? "hidden" : ""}`} />

      {/* ── Main navbar ── */}
      <motion.div
        className="nav-root"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`nav-pill ${scrolled ? "scrolled" : ""}`} ref={navRef}>

          {/* Logo */}
          <motion.a
            className="nav-logo"
            href="#hero"
            onClick={e => handleLink(e, "#hero", null)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="nav-logo-img-wrap">
              <img src={logo} alt="Shaurya IT" />
            </div>
            <div className="nav-logo-wordmark">
              <span className="nav-logo-name">Shaurya IT</span>
              <span className="nav-logo-tag">Services</span>
            </div>
          </motion.a>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map(l => (
              <li key={l.label} className="nav-link-wrap"
                onMouseEnter={() => setHoveredLink(l.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <AnimatePresence>
                  {hoveredLink === l.label && (
                    <motion.div
                      className="nav-hover-bg"
                      layoutId="navHoverBg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <a
                  className={`nav-link ${activeLink === l.label ? "active" : ""}`}
                  href={l.href}
                  onClick={e => handleLink(e, l.href, l.label)}
                >
                  <span className="nav-link-num">{l.num}</span>
                  {l.label}
                </a>
                <AnimatePresence>
                  {activeLink === l.label && (
                    <motion.div
                      className="nav-link-dot"
                      layoutId="navDot"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="nav-cta-wrap">
            <motion.button
              className="nav-cta"
              style={{ x: springX, y: springY }}
              onMouseMove={handleCtaMouseMove}
              onMouseLeave={handleCtaMouseLeave}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { addRipple(e); onContactClick(); }}
            >
              <div className="nav-cta-border" />
              <div className="nav-cta-fill" />
              <div className="nav-cta-glow" />
              {ripples.map(r => (
                <span
                  key={r.id}
                  className="nav-cta-ripple"
                  style={{ width: 20, height: 20, left: r.x - 10, top: r.y - 10 }}
                />
              ))}
              <span className="nav-cta-text">
                <span className="nav-cta-icon">
                  <Zap size={10} fill="#fff" color="#fff" />
                </span>
                Let's Talk
              </span>
            </motion.button>
          </div>

          {/* Mobile btn */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={17} />
          </button>
        </div>
      </motion.div>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="nav-mobile-bg" />
            <div className="nav-mobile-blob nav-mobile-blob-1" />
            <div className="nav-mobile-blob nav-mobile-blob-2" />
            <div className="nav-mobile-grid" />

            <button className="nav-mobile-close" onClick={() => setMobileOpen(false)}>
              <X size={16} />
            </button>

            <nav style={{ position: "relative", zIndex: 2 }}>
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                >
                  <span className="mobile-nav-num">{l.num}</span>
                  <a
                    className="mobile-link"
                    href={l.href}
                    onClick={e => handleLink(e, l.href, l.label)}
                  >
                    <span className="mobile-link-inner" data-text={l.label}>{l.label}</span>
                  </a>
                </motion.div>
              ))}
            </nav>

            <div className="mobile-divider" />

            <motion.button
              className="mobile-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              onClick={() => { setMobileOpen(false); onContactClick(); }}
            >
              <MessageCircle size={16} />
              Let's Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

Navbar.propTypes = { onContactClick: PropTypes.func.isRequired };