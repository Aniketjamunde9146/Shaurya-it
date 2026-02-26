import { motion } from "framer-motion";
import { Mail, Phone, Globe, ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#hero" },
  { label: "Services", href: "#services-section" },
  { label: "Projects", href: "#projects-section" },
  { label: "Process",  href: "#process-section" },
  { label: "Tech",     href: "#tech-section" },
  { label: "Team",     href: "#team" },
  { label: "Inquiry",  href: "#inquiry-section-v2" },
];

const socials = [
  { Icon: Github,    href: "https://github.com/Aniketjamunde9146/",              label: "GitHub" },
  { Icon: Linkedin,  href: "https://in.linkedin.com/in/aniket-jamunde-37203b386", label: "LinkedIn" },
  { Icon: Instagram, href: "https://instagram.com/aniket_jamunde_002",            label: "Instagram" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .footer-root {
          position: relative;
          background: #020508;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          color: #e2e8f0;
        }

        /* Top glow border */
        .footer-top-glow {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(99,212,255,0.2) 30%, rgba(168,85,247,0.2) 70%, transparent 100%);
        }

        /* BG */
        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(99,212,255,0.04), transparent 60%);
          pointer-events: none;
        }

        /* MAIN BODY */
        .footer-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 6vw 52px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          position: relative;
          z-index: 2;
        }

        /* BRAND */
        .footer-brand {}
        .footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.9rem;
          letter-spacing: 0.04em;
          color: #f0f6ff;
          margin-bottom: 14px;
          line-height: 1;
        }
        .footer-logo-accent {
          background: linear-gradient(110deg, #63d4ff, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-tagline {
          font-size: 0.8rem;
          font-weight: 300;
          color: #2d4155;
          line-height: 1.75;
          max-width: 260px;
          margin-bottom: 24px;
        }
        .footer-socials { display: flex; gap: 10px; }
        .footer-social-btn {
          width: 34px; height: 34px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          display: flex; align-items: center; justify-content: center;
          color: #2d4155;
          text-decoration: none;
          transition: all 0.22s;
        }
        .footer-social-btn:hover { border-color: rgba(99,212,255,0.28); color: #63d4ff; background: rgba(99,212,255,0.07); transform: translateY(-2px); }

        /* COLUMNS */
        .footer-col h4 {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1e3248;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .footer-nav { display: flex; flex-direction: column; gap: 10px; }
        .footer-nav a {
          font-size: 0.82rem;
          font-weight: 300;
          color: #2d4155;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s, gap 0.2s;
          width: fit-content;
        }
        .footer-nav a:hover { color: #63d4ff; gap: 8px; }
        .nav-arrow { opacity: 0; transform: translateX(-4px); transition: all 0.2s; font-size: 0.7rem; }
        .footer-nav a:hover .nav-arrow { opacity: 1; transform: translateX(0); }

        /* CONTACT COL */
        .footer-contact-list { display: flex; flex-direction: column; gap: 12px; }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.78rem;
          font-weight: 300;
          color: #2d4155;
          line-height: 1.5;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-item:hover { color: #4e637a; }
        .footer-contact-item svg { color: #63d4ff; flex-shrink: 0; margin-top: 1px; }

        /* STATUS COL */
        .status-card {
          background: rgba(0,255,157,0.04);
          border: 1px solid rgba(0,255,157,0.1);
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 16px;
        }
        .status-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .status-dot { width: 7px; height: 7px; border-radius: 50%; background: #00ff9d; box-shadow: 0 0 6px #00ff9d; animation: blink 2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        .status-label { font-size: 0.72rem; font-weight: 600; color: #00ff9d; letter-spacing: 0.1em; text-transform: uppercase; }
        .status-sub { font-size: 0.7rem; color: #1e3248; font-weight: 300; }
        .cta-small {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #63d4ff;
          text-decoration: none;
          border: 1px solid rgba(99,212,255,0.2);
          border-radius: 999px;
          padding: 6px 14px;
          transition: all 0.22s;
        }
        .cta-small:hover { background: rgba(99,212,255,0.07); border-color: rgba(99,212,255,0.35); }

        /* BOTTOM BAR */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255,255,255,0.04);
          position: relative;
          z-index: 2;
        }
        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy { font-size: 0.72rem; color: #1a2d3d; font-weight: 300; }
        .footer-copy span { color: #2d4155; }
        .back-top {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          color: #1e3248;
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.08em;
        }
        .back-top:hover { color: #63d4ff; }

        @media (max-width: 900px) {
          .footer-body { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer-brand { grid-column: span 2; }
        }
        @media (max-width: 560px) {
          .footer-body { grid-template-columns: 1fr; padding: 52px 5vw 40px; }
          .footer-brand { grid-column: span 1; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-top-glow" />

        <div className="footer-body">
          {/* BRAND */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">
              Shaurya <span className="footer-logo-accent">IT Services</span>
            </h3>
            <p className="footer-tagline">
              Building reliable web & mobile solutions with performance,
              clarity, and long-term value. From concept to production.
            </p>
            <div className="footer-socials">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="footer-social-btn" aria-label={label}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* NAV */}
          <motion.div className="footer-col" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            <h4>Navigation</h4>
            <nav className="footer-nav">
              {navLinks.map(({ label, href }) => (
                <a key={label} href={href}>
                  <span className="nav-arrow">›</span>
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* CONTACT */}
          <motion.div className="footer-col" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} viewport={{ once: true }}>
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <a href="mailto:aniketjamunde4@gmail.com" className="footer-contact-item">
                <Mail size={13} />
                aniketjamunde4@gmail.com
              </a>
              <a href="tel:+919146293702" className="footer-contact-item">
                <Phone size={13} />
                +91 9146293702
              </a>
              <div className="footer-contact-item">
                <Globe size={13} />
                Remote Worldwide
              </div>
            </div>
          </motion.div>

          {/* STATUS */}
          <motion.div className="footer-col" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <h4>Availability</h4>
            <div className="status-card">
              <div className="status-row">
                <span className="status-dot" />
                <span className="status-label">Open for Work</span>
              </div>
              <p className="status-sub">Accepting new projects for Q2 2025</p>
            </div>
            <a href="#inquiry-section-v2" className="cta-small">
              Start a Project <ArrowUpRight size={12} />
            </a>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © {new Date().getFullYear()} <span>Shaurya IT Services</span> — All rights reserved.
            </p>
            <a href="#hero" className="back-top">
              Back to top <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}