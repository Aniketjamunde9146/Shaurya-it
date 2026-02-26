/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  Code2, Smartphone, Gamepad2, Cloud, Wrench,
  ShieldCheck, Zap, Layers, ArrowUpRight
} from "lucide-react";
import { FaReact, FaHtml5, FaCss3Alt, FaAndroid, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiTypescript, SiJavascript, SiNetlify, SiVercel, SiMongodb } from "react-icons/si";

/* ── DATA ── */
const SERVICES = [
  {
    icon: Code2,
    label: "01",
    title: "Web Development",
    color: "#63d4ff",
    tagline: "Beautiful, fast, production-grade web products.",
    highlights: [
      { icon: Layers,      text: "SPA & dashboard systems" },
      { icon: ShieldCheck, text: "Auth & secure APIs" },
      { icon: Zap,         text: "SEO & performance focused" },
    ],
    tech: [
      { Icon: FaReact,      name: "React",      color: "#61DAFB" },
      { Icon: SiTypescript, name: "TypeScript",  color: "#3178C6" },
      { Icon: FaHtml5,      name: "HTML5",       color: "#E34F26" },
      { Icon: FaCss3Alt,    name: "CSS3",        color: "#1572B6" },
      { Icon: SiFirebase,   name: "Firebase",    color: "#FFCA28" },
      { Icon: SiMongodb,    name: "MongoDB",     color: "#47A248" },
      { Icon: FaGithub,     name: "GitHub",      color: "#ffffff" },
    ],
  },
  {
    icon: Smartphone,
    label: "02",
    title: "App Development",
    color: "#a855f7",
    tagline: "Cross-platform apps that feel native & ship fast.",
    highlights: [
      { icon: Layers,      text: "Real-feature Android apps" },
      { icon: ShieldCheck, text: "Auth, DB & APIs" },
      { icon: Zap,         text: "Play Store ready builds" },
    ],
    tech: [
      { Icon: SiFlutter,  name: "Flutter",   color: "#54C5F8" },
      { Icon: FaAndroid,  name: "Android",   color: "#3DDC84" },
      { Icon: SiFirebase, name: "Firebase",  color: "#FFCA28" },
      { Icon: SiMongodb,  name: "MongoDB",   color: "#47A248" },
    ],
  },
  {
    icon: Gamepad2,
    label: "03",
    title: "Game Development",
    color: "#00ff9d",
    tagline: "Engaging experiences with smart gameplay loops.",
    highlights: [
      { icon: Layers,      text: "Multiplayer & AI logic" },
      { icon: Zap,         text: "Optimized performance" },
      { icon: ShieldCheck, text: "Offline gameplay" },
    ],
    tech: [
      { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { Icon: FaNodeJs,     name: "Node.js",    color: "#68A063" },
    ],
  },
  {
    icon: Cloud,
    label: "04",
    title: "Deployment & Hosting",
    color: "#fb923c",
    tagline: "Zero-downtime deploys with CI-ready pipelines.",
    highlights: [
      { icon: Zap,         text: "Production deployments" },
      { icon: Layers,      text: "Domains & hosting setup" },
      { icon: ShieldCheck, text: "CI-ready builds" },
    ],
    tech: [
      { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
      { Icon: SiNetlify,  name: "Netlify",  color: "#00C7B7" },
      { Icon: SiVercel,   name: "Vercel",   color: "#ffffff" },
      { Icon: FaGithub,   name: "GitHub",   color: "#ffffff" },
    ],
  },
  {
    icon: Wrench,
    label: "05",
    title: "Maintenance & Support",
    color: "#f472b6",
    tagline: "Ongoing care to keep your product sharp & secure.",
    highlights: [
      { icon: ShieldCheck, text: "Bug fixes & upgrades" },
      { icon: Zap,         text: "Performance tuning" },
      { icon: Layers,      text: "Feature improvements" },
    ],
    tech: [
      { Icon: FaReact,    name: "React",   color: "#61DAFB" },
      { Icon: SiFlutter,  name: "Flutter", color: "#54C5F8" },
      { Icon: SiFirebase, name: "Firebase",color: "#FFCA28" },
    ],
  },
];

/* ── SERVICE CARD ── */
function ServiceCard({ service, index }) {
  const { icon: Icon, label, title, color, tagline, highlights, tech } = service;

  return (
    <motion.div
      className="svc-card"
      style={{ "--svc-color": color }}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: {
          opacity: 1, y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }
        }
      }}
      whileHover={{ y: -10 }}
    >
      {/* Top accent line */}
      <span className="card-accent-line" />

      {/* Header */}
      <div className="svc-head">
        <div className="svc-icon-wrap">
          <Icon size={20} className="svc-icon" />
        </div>
        <span className="svc-label">{label}</span>
      </div>

      <h3 className="svc-title">{title}</h3>
      <p className="svc-tagline">{tagline}</p>

      {/* Highlights */}
      <ul className="svc-highlights">
        {highlights.map((h, i) => (
          <li key={i} className="svc-highlight">
            <span className="hl-icon"><h.icon size={12} /></span>
            <span>{h.text}</span>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="svc-divider" />

      {/* Tech icons */}
      <div className="svc-tech">
        {tech.map(({ Icon: TIcon, name, color: tc }, i) => (
          <motion.span
            key={i}
            className="svc-tech-icon"
            style={{ "--tc": tc }}
            title={name}
            whileHover={{ y: -5, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <TIcon size={16} />
          </motion.span>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        className="svc-cta"
        whileHover={{ gap: "10px" }}
      >
        Learn more <ArrowUpRight size={13} />
      </motion.button>
    </motion.div>
  );
}

/* ── MAIN ── */
export default function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .services-section {
          position: relative;
          background: #04070f;
          padding: 100px 6vw 120px;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        /* BG */
        .services-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 40% at 80% 10%, rgba(99,212,255,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 5% 90%, rgba(168,85,247,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .svc-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent);
          pointer-events: none;
        }

        /* HEADER */
        .svc-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 64px;
          position: relative;
          z-index: 2;
        }
        .svc-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(99,212,255,0.18);
          border-radius: 999px;
          padding: 5px 16px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #63d4ff;
          background: rgba(99,212,255,0.04);
          margin-bottom: 24px;
        }
        .svc-kicker-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #63d4ff; box-shadow: 0 0 6px #63d4ff;
        }
        .svc-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #f0f6ff;
          margin-bottom: 18px;
        }
        .svc-title-accent {
          background: linear-gradient(110deg, #63d4ff 0%, #a855f7 55%, #00ff9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .svc-subtitle {
          font-size: 0.95rem;
          font-weight: 300;
          color: #3d5470;
          line-height: 1.75;
        }

        /* GRID */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 18px;
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* CARD */
        .svc-card {
          position: relative;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 28px 26px 22px;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
          cursor: default;
        }
        .svc-card:hover {
          border-color: color-mix(in srgb, var(--svc-color) 30%, transparent);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 40px color-mix(in srgb, var(--svc-color) 6%, transparent);
        }

        /* Top accent bar */
        .card-accent-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--svc-color), transparent);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .svc-card:hover .card-accent-line { opacity: 1; }

        /* Glow blob */
        .svc-card::after {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: var(--svc-color);
          opacity: 0;
          filter: blur(60px);
          transition: opacity 0.4s;
          pointer-events: none;
        }
        .svc-card:hover::after { opacity: 0.05; }

        /* Head */
        .svc-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .svc-icon-wrap {
          width: 42px; height: 42px;
          border-radius: 11px;
          background: color-mix(in srgb, var(--svc-color) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--svc-color) 25%, transparent);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s;
        }
        .svc-card:hover .svc-icon-wrap { background: color-mix(in srgb, var(--svc-color) 18%, transparent); }
        .svc-icon { color: var(--svc-color); }
        .svc-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.08);
        }

        /* Title */
        .svc-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.7rem;
          letter-spacing: 0.04em;
          color: #f0f6ff;
          line-height: 1;
          margin-bottom: 8px;
        }
        .svc-tagline {
          font-size: 0.77rem;
          font-weight: 300;
          color: #2d4155;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Highlights */
        .svc-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 20px;
        }
        .svc-highlight {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 0.77rem;
          color: #3d5470;
          line-height: 1.4;
        }
        .hl-icon {
          color: var(--svc-color);
          display: flex;
          align-items: center;
          flex-shrink: 0;
          opacity: 0.8;
        }

        /* Divider */
        .svc-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 16px;
        }

        /* Tech */
        .svc-tech {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .svc-tech-icon {
          color: var(--tc, #e2e8f0);
          opacity: 0.55;
          display: flex;
          align-items: center;
          transition: opacity 0.2s;
          cursor: default;
          filter: drop-shadow(0 0 4px color-mix(in srgb, var(--tc) 40%, transparent));
        }
        .svc-card:hover .svc-tech-icon { opacity: 0.75; }
        .svc-tech-icon:hover { opacity: 1 !important; }

        /* CTA */
        .svc-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          padding: 0;
          font-family: 'Outfit', sans-serif;
          font-size: 0.73rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--svc-color) 60%, transparent);
          cursor: pointer;
          margin-top: auto;
          transition: color 0.2s;
        }
        .svc-cta:hover { color: var(--svc-color); }

        /* COUNT BAR */
        .svc-count-bar {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 72px;
          padding-top: 48px;
          border-top: 1px solid rgba(255,255,255,0.04);
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
        }
        .count-item { text-align: center; }
        .count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          line-height: 1;
          background: linear-gradient(135deg, #f0f6ff, #63d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin-bottom: 6px;
        }
        .count-label {
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1e3248;
          font-weight: 500;
        }

        @media (max-width: 600px) {
          .services-section { padding: 70px 5vw 90px; }
          .svc-grid { grid-template-columns: 1fr; }
          .svc-count-bar { gap: 24px; }
        }
      `}</style>

      <section id="services-section" className="services-section">
        <div className="svc-bg-grid" />

        {/* HEADER */}
        <motion.div
          className="svc-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="svc-kicker">
            <span className="svc-kicker-dot" />
            What We Build
          </div>
          <h2 className="svc-section-title">
            Our Core<br />
            <span className="svc-title-accent">Services</span>
          </h2>
          <p className="svc-subtitle">
            End-to-end development services focused on performance,
            scalability, and real-world usability.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="svc-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} service={svc} index={i} />
          ))}
        </motion.div>

        {/* BOTTOM STATS */}
        <motion.div
          className="svc-count-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { num: "5+",   label: "Service Categories" },
            { num: "20+",  label: "Technologies Used" },
            { num: "12+", label: "Projects Delivered" },
            { num: "100%", label: "Client Satisfaction" },
          ].map(({ num, label }) => (
            <div key={label} className="count-item">
              <span className="count-num">{num}</span>
              <span className="count-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}