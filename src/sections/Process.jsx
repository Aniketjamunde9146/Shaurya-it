import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { MessageSquare, PencilRuler, Code2, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    tagline: "Understand the problem",
    points: ["Understand goals & scope", "Identify core requirements", "Define system foundation"],
    icon: <MessageSquare size={22} />,
    color: "#63d4ff",
  },
  {
    num: "02",
    title: "Strategy",
    tagline: "Plan before building",
    points: ["UI / UX flow planning", "Technology stack selection", "Architecture decisions"],
    icon: <PencilRuler size={22} />,
    color: "#f59e0b",
  },
  {
    num: "03",
    title: "Development",
    tagline: "Build with precision",
    points: ["Feature-by-feature build", "Testing & optimization", "Performance validation"],
    icon: <Code2 size={22} />,
    color: "#a855f7",
  },
  {
    num: "04",
    title: "Deployment",
    tagline: "Ship & sustain",
    points: ["Production launch", "Final system checks", "Post-launch support"],
    icon: <Rocket size={22} />,
    color: "#00ff9d",
  },
];

/* Tilt card wrapper */
function TiltCard({ children, color }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-60, 60], [8, -8]);
  const rotateY = useTransform(sx, [-80, 80], [-8, 8]);
  const [hovered, setHovered] = useState(false);

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function onLeave() { x.set(0); y.set(0); setHovered(false); }

  return (
    <motion.div
      className="step-card"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", "--c": color }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      data-hovered={hovered}
    >
      {children}
      <div className="card-shine" />
    </motion.div>
  );
}

export default function Process() {
  const [active, setActive] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .process-section {
          position: relative;
          background: #04070f;
          padding: 100px 6vw 120px;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          color: #e2e8f0;
        }

        /* BG */
        .process-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 40% at 15% 10%, rgba(99,212,255,0.05) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 85% 90%, rgba(168,85,247,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .process-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent);
          pointer-events: none;
        }

        /* HEADER */
        .process-header {
          text-align: center;
          max-width: 580px;
          margin: 0 auto 72px;
          position: relative;
          z-index: 2;
        }
        .process-kicker {
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
          background: rgba(99,212,255,0.05);
          margin-bottom: 24px;
        }
        .kicker-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #00ff9d;
          box-shadow: 0 0 6px #00ff9d;
          animation: blink 2s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        .process-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6.5vw, 5.5rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #f0f6ff;
          margin-bottom: 18px;
        }
        .process-title-accent {
          background: linear-gradient(110deg, #63d4ff 0%, #a855f7 55%, #00ff9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .process-subtitle {
          font-size: 0.93rem;
          font-weight: 300;
          color: #3d5470;
          line-height: 1.75;
        }

        /* PROGRESS TRACK */
        .progress-track {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin: 0 auto 64px;
          max-width: 600px;
          position: relative;
          z-index: 2;
        }
        .track-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          flex: 1;
        }
        .track-node {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.9rem;
          color: #2d4155;
          transition: all 0.3s;
          position: relative;
          z-index: 1;
        }
        .track-step.active .track-node,
        .track-step:hover .track-node {
          border-color: var(--tc);
          background: color-mix(in srgb, var(--tc) 12%, transparent);
          color: var(--tc);
          box-shadow: 0 0 14px color-mix(in srgb, var(--tc) 40%, transparent);
        }
        .track-label {
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1e3248;
          transition: color 0.3s;
        }
        .track-step.active .track-label,
        .track-step:hover .track-label { color: var(--tc); }
        .track-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 22px;
          position: relative;
          overflow: hidden;
        }
        .track-line-fill {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          background: linear-gradient(90deg, var(--from), var(--to));
          transition: width 0.5s ease;
        }

        /* CARDS GRID */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          perspective: 1200px;
        }

        /* CARD */
        .step-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 28px 24px 24px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .step-card[data-hovered="true"] {
          border-color: color-mix(in srgb, var(--c) 35%, transparent);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px color-mix(in srgb, var(--c) 10%, transparent);
        }

        /* Shine overlay */
        .card-shine {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.04), transparent 55%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: inherit;
        }
        .step-card[data-hovered="true"] .card-shine { opacity: 1; }

        /* Top glow strip */
        .step-card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--c), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .step-card[data-hovered="true"]::before { opacity: 1; }

        /* Step number */
        .step-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.5rem;
          line-height: 1;
          color: rgba(255,255,255,0.04);
          position: absolute;
          top: 14px; right: 18px;
          letter-spacing: 0.02em;
          transition: color 0.4s;
          user-select: none;
        }
        .step-card[data-hovered="true"] .step-num {
          color: color-mix(in srgb, var(--c) 14%, transparent);
        }

        /* Icon */
        .step-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--c) 10%, transparent);
          color: var(--c);
          border: 1px solid color-mix(in srgb, var(--c) 20%, transparent);
          margin-bottom: 18px;
          transition: box-shadow 0.3s, background 0.3s;
        }
        .step-card[data-hovered="true"] .step-icon {
          box-shadow: 0 0 20px color-mix(in srgb, var(--c) 30%, transparent);
          background: color-mix(in srgb, var(--c) 16%, transparent);
        }

        /* Title & tagline */
        .step-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.7rem;
          letter-spacing: 0.04em;
          color: #f0f6ff;
          margin-bottom: 4px;
          line-height: 1;
        }
        .step-tagline {
          font-size: 0.72rem;
          color: #2d4155;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
          transition: color 0.3s;
        }
        .step-card[data-hovered="true"] .step-tagline { color: var(--c); opacity: 0.7; }

        /* Divider */
        .step-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 16px;
        }

        /* Points */
        .step-points {
          list-style: none;
          padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 9px;
        }
        .step-points li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 300;
          color: #3d5470;
          line-height: 1.5;
          transition: color 0.2s;
        }
        .step-card[data-hovered="true"] .step-points li { color: #4e637a; }
        .step-bullet {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--c);
          flex-shrink: 0;
          margin-top: 5px;
          box-shadow: 0 0 5px var(--c);
        }

        /* Step index pill at bottom */
        .step-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 20px;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 999px;
          padding: 4px 12px;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1e3248;
          background: rgba(255,255,255,0.02);
          transition: all 0.3s;
        }
        .step-card[data-hovered="true"] .step-pill {
          border-color: color-mix(in srgb, var(--c) 22%, transparent);
          color: var(--c);
          background: color-mix(in srgb, var(--c) 06%, transparent);
        }

        /* BOTTOM CTA */
        .process-cta {
          text-align: center;
          margin-top: 72px;
          position: relative;
          z-index: 2;
        }
        .cta-line {
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #1e3248;
          margin-bottom: 20px;
        }
        .cta-badges {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cta-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 999px;
          padding: 7px 18px;
          font-size: 0.73rem;
          color: #2d4155;
          background: rgba(255,255,255,0.02);
        }
        .cta-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
        }

        @media (max-width: 960px) {
          .process-grid { grid-template-columns: repeat(2, 1fr); }
          .progress-track { max-width: 100%; }
        }
        @media (max-width: 560px) {
          .process-section { padding: 70px 5vw 90px; }
          .process-grid { grid-template-columns: 1fr; }
          .progress-track { display: none; }
        }
      `}</style>

      <section id="process-section" className="process-section">
        <div className="process-bg-grid" />

        {/* HEADER */}
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="process-kicker">
            <span className="kicker-dot" />
            How We Work
          </div>
          <h2 className="process-title">
            Strategic<br />
            <span className="process-title-accent">Workflow</span>
          </h2>
          <p className="process-subtitle">
            A disciplined, four-phase process that turns ideas into
            production-grade digital products — on time, every time.
          </p>
        </motion.div>

        {/* PROGRESS TRACK */}
        <motion.div
          className="progress-track"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <>
              <div
                key={step.num}
                className={`track-step ${active === i ? "active" : ""}`}
                style={{ "--tc": step.color }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="track-node">{step.num}</div>
                <div className="track-label">{step.title}</div>
              </div>
              {i < steps.length - 1 && (
                <div
                  key={`line-${i}`}
                  className="track-line"
                >
                  <div
                    className="track-line-fill"
                    style={{
                      "--from": step.color,
                      "--to": steps[i + 1].color,
                      width: active !== null && active > i ? "100%" : "0%",
                    }}
                  />
                </div>
              )}
            </>
          ))}
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="process-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.93 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              <TiltCard color={step.color}>
                <div className="step-num">{step.num}</div>
                <div className="step-icon" style={{ "--c": step.color }}>{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-tagline">{step.tagline}</p>
                <div className="step-divider" />
                <ul className="step-points">
                  {step.points.map((pt, j) => (
                    <li key={j}>
                      <span className="step-bullet" style={{ "--c": step.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="step-pill">
                  Phase {step.num}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          className="process-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="cta-line">Every project follows this exact process</p>
          <div className="cta-badges">
            {[
              { label: "Transparent Communication", color: "#63d4ff" },
              { label: "On-Time Delivery",           color: "#00ff9d" },
              { label: "Post-Launch Support",        color: "#a855f7" },
            ].map(b => (
              <div key={b.label} className="cta-badge">
                <span className="cta-badge-dot" style={{ background: b.color, boxShadow: `0 0 5px ${b.color}` }} />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}