import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Zap, Globe, Smartphone } from "lucide-react";

/* ── FLOATING PARTICLE ── */
function Particle({ delay, x, y, size, duration }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(99,212,255,0.18)",
        pointerEvents: "none",
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.6, 0],
        scale: [0.8, 1.3, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: `${3 + Math.random() * 5}px`,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 4,
}));

/* ── COUNTER ── */
function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(timer); }
      else setVal(start);
    }, 24);
    return () => clearInterval(timer);
  }, [to]);
  return <>{val}{suffix}</>;
}

/* ── TECH CHIP ── */
function TechChip({ Icon, label, color }) {
  return (
    <motion.div
      className="tech-chip"
      style={{ "--chip-color": color }}
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <span className="chip-dot" />
      <Icon size={13} className="chip-icon" />
      <span className="chip-label">{label}</span>
    </motion.div>
  );
}

/* ── MAIN HERO ── */
export default function Hero({ onStartProject }) {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [6, -6]);
  const rotateY = useTransform(springX, [-400, 400], [-6, 6]);

  function handleMouseMove(e) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  const stats = [
    { label: "Projects Delivered", value: 12, suffix: "+" },
    { label: "HandsOn Experience",  value: 23,  suffix: "+" },
    { label: "Years of Expertise", value: 3,   suffix: "+" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          position: relative;
          min-height: 100vh;
          background: #04070f;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0 6vw;
          font-family: 'Outfit', sans-serif;
        }

        /* ── BG LAYERS ── */
        .bg-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 55% at 20% 30%, rgba(0,180,255,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 70%, rgba(120,40,255,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 100%, rgba(0,255,170,0.04) 0%, transparent 60%);
          pointer-events: none;
        }
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
          pointer-events: none;
        }
        .bg-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(99,212,255,0.06);
          pointer-events: none;
        }
        .ring-1 { width: 600px; height: 600px; top: 50%; left: 50%; transform: translate(-50%,-50%); }
        .ring-2 { width: 900px; height: 900px; top: 50%; left: 50%; transform: translate(-50%,-50%); border-color: rgba(120,40,255,0.04); }
        .ring-3 { width: 1200px; height: 1200px; top: 50%; left: 50%; transform: translate(-50%,-50%); border-color: rgba(99,212,255,0.025); }

        /* ── LAYOUT ── */
        .hero-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 64px;
          align-items: center;
          max-width: 1200px;
          width: 100%;
          padding: 120px 0 100px;
        }

        /* ── LEFT ── */
        .hero-left { max-width: 680px; }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(99,212,255,0.2);
          border-radius: 999px;
          padding: 6px 16px 6px 8px;
          margin-bottom: 32px;
          background: rgba(99,212,255,0.04);
          backdrop-filter: blur(10px);
        }
        .badge-pulse {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #00ff9d;
          box-shadow: 0 0 0 0 rgba(0,255,157,0.6);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0 rgba(0,255,157,0.6); }
          70%  { box-shadow: 0 0 0 8px rgba(0,255,157,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,255,157,0); }
        }
        .badge-text {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #63d4ff;
        }

        /* ── TITLE ── */
        .hero-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #334155;
          margin-bottom: 14px;
        }
        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 8.5vw, 8rem);
          line-height: 0.9;
          letter-spacing: 0.01em;
          color: #f0f6ff;
          margin-bottom: 28px;
        }
        .title-line { display: block; }
        .title-accent {
          display: block;
          background: linear-gradient(110deg, #63d4ff 0%, #a855f7 55%, #00ff9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.8;
          color: #4e637a;
          max-width: 480px;
          margin-bottom: 40px;
        }
        .hero-desc strong { color: #7ea8c4; font-weight: 500; }

        /* ── CTA ROW ── */
        .cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 52px;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #63d4ff 0%, #7c3aed 100%);
          border: none;
          border-radius: 10px;
          padding: 14px 28px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          letter-spacing: 0.02em;
          transition: box-shadow 0.3s;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:hover { box-shadow: 0 0 40px rgba(99,212,255,0.35), 0 8px 30px rgba(124,58,237,0.3); }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          color: #4e637a;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .btn-secondary:hover { color: #63d4ff; }
        .sec-arrow {
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, transform 0.2s;
        }
        .btn-secondary:hover .sec-arrow { border-color: #63d4ff; transform: translateX(3px); }

        /* ── TECH CHIPS ── */
        .tech-chips {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          cursor: default;
          transition: border-color 0.2s;
        }
        .tech-chip:hover { border-color: var(--chip-color, rgba(99,212,255,0.3)); }
        .chip-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--chip-color, #63d4ff);
          box-shadow: 0 0 5px var(--chip-color, #63d4ff);
        }
        .chip-icon { color: var(--chip-color, #63d4ff); }
        .chip-label { font-size: 0.73rem; color: #4e637a; font-weight: 400; letter-spacing: 0.05em; }

        /* ── RIGHT STATS CARD ── */
        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 220px;
        }
        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 22px 24px;
          backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,212,255,0.3), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .stat-card:hover { border-color: rgba(99,212,255,0.15); }
        .stat-card:hover::before { opacity: 1; }
        .stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.6rem;
          line-height: 1;
          background: linear-gradient(135deg, #f0f6ff, #63d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2d4155;
          font-weight: 500;
        }

        /* ── DIVIDER LINE ── */
        .hero-divider {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,212,255,0.1), rgba(124,58,237,0.1), transparent);
        }

        /* ── SCROLL HINT ── */
        .scroll-hint {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 2;
        }
        .scroll-text { font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #1e3248; }
        .scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(180deg, rgba(99,212,255,0.4), transparent);
          animation: scrollDrop 1.8s ease-in-out infinite;
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }

        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; gap: 48px; padding: 100px 0 80px; }
          .hero-right { flex-direction: row; flex-wrap: wrap; min-width: unset; }
          .stat-card { flex: 1; min-width: 140px; }
        }
        @media (max-width: 560px) {
          .hero-title { font-size: 3.8rem; }
          .cta-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section
        className="hero-root"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        id="hero"
      >
        {/* Background */}
        <div className="bg-mesh" />
        <div className="bg-grid" />
        <div className="bg-ring ring-1" />
        <div className="bg-ring ring-2" />
        <div className="bg-ring ring-3" />

        {/* Floating particles */}
        {particles.map(p => <Particle key={p.id} {...p} />)}

        {/* Main content */}
        <div className="hero-inner">

          {/* LEFT */}
          <motion.div
            className="hero-left"
            style={{ rotateX, rotateY, perspective: 1000 }}
          >
            {/* Badge */}
            <motion.div
              className="status-badge"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="badge-pulse" />
              <span className="badge-text">Available for new projects</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              className="hero-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Shaurya IT Services
            </motion.p>

            {/* Title */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="title-line">We Design,</span>
              <span className="title-line">Build &amp; Ship</span>
              <span className="title-accent">Digital Products</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <strong>High-performance websites</strong> and mobile apps engineered
              for scale. From pixel-perfect frontends to rock-solid backends —
              we deliver products that grow with your business.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="cta-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.55 }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onStartProject}
              >
                Start a Project <ArrowUpRight size={16} />
              </motion.button>

              <button className="btn-secondary">
                View our work
                <span className="sec-arrow"><ArrowUpRight size={12} /></span>
              </button>
            </motion.div>

            {/* Tech chips */}
            <motion.div
              className="tech-chips"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <TechChip Icon={Globe}       label="React & Next.js"  color="#63d4ff" />
              <TechChip Icon={Smartphone}  label="Flutter & Dart"   color="#a855f7" />
              <TechChip Icon={Zap}         label="AI Integration"   color="#00ff9d" />
            </motion.div>
          </motion.div>

          {/* RIGHT – Stats */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="stat-value">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="hero-divider" />

        {/* Scroll hint */}
        <div className="scroll-hint">
          <span className="scroll-text">Scroll</span>
          <span className="scroll-line" />
        </div>
      </section>
    </>
  );
}