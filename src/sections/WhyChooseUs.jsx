import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Rocket, Code2, Layers, Wrench, ChevronDown, Plus } from "lucide-react";
import { useState } from "react";

const reasons = [
  {
    title: "Engineering-First Approach",
    desc: "Every project is built with scalability, performance, and clean architecture from day one.",
    icon: <Code2 size={20} />,
    color: "#63d4ff",
    metric: "100%",
    metricLabel: "Clean Code",
  },
  {
    title: "Real Project Experience",
    desc: "Hands-on experience building real apps, games, and production-ready systems.",
    icon: <Layers size={20} />,
    color: "#f59e0b",
    metric: "80+",
    metricLabel: "Projects Done",
  },
  {
    title: "Fast & Focused Execution",
    desc: "Clear milestones, rapid development cycles, and zero time wasted.",
    icon: <Rocket size={20} />,
    color: "#a855f7",
    metric: "2×",
    metricLabel: "Faster Delivery",
  },
  {
    title: "Transparent Communication",
    desc: "Honest timelines, regular check-ins, and clear technical discussions.",
    icon: <ShieldCheck size={20} />,
    color: "#00ff9d",
    metric: "24h",
    metricLabel: "Response Time",
  },
  {
    title: "Long-Term Support",
    desc: "Maintenance, upgrades, and improvements — support doesn't end at launch.",
    icon: <Wrench size={20} />,
    color: "#fb923c",
    metric: "∞",
    metricLabel: "Post-Launch Care",
  },
];

const faqs = [
  {
    q: "Why should we choose you for our project?",
    a: "We focus on building real, working products — not just designs. Every project is approached with an engineering mindset, clean architecture, and long-term scalability in mind. We believe in clear communication, honest timelines, and delivering exactly what is promised.",
  },
  {
    q: "Can you build both Android and iOS applications?",
    a: "Yes. We build cross-platform mobile applications using Flutter that work smoothly on both Android and iOS. This allows faster development, consistent performance, and lower cost while maintaining a high-quality user experience.",
  },
  {
    q: "Do you handle both design and development?",
    a: "Yes. We manage the complete process — from UI/UX design to frontend, backend, and deployment. Everything is planned and built together, ensuring the design matches functionality perfectly without coordinating multiple teams.",
  },
  {
    q: "What kind of projects do you usually work on?",
    a: "We work on web applications, mobile apps, dashboards, admin panels, and startup products. Some projects are client-based, while others are self-initiated concept projects demonstrating production-level quality.",
  },
  {
    q: "Will you provide support after the project is delivered?",
    a: "Yes. Support doesn't end at launch. We provide post-launch assistance including bug fixes, performance improvements, feature updates, and technical guidance to keep your product stable and future-ready.",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .why-section {
          position: relative;
          background: #04070f;
          padding: 100px 6vw 120px;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          color: #e2e8f0;
        }
        .why-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 5% 20%, rgba(99,212,255,0.05), transparent 65%),
            radial-gradient(ellipse 50% 40% at 95% 80%, rgba(168,85,247,0.05), transparent 65%);
          pointer-events: none;
        }
        .why-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent);
          pointer-events: none;
        }

        /* HEADER */
        .why-header {
          text-align: center;
          max-width: 580px;
          margin: 0 auto 72px;
          position: relative;
          z-index: 2;
        }
        .why-kicker {
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
        .why-kicker-dot { width: 6px; height: 6px; border-radius: 50%; background: #63d4ff; box-shadow: 0 0 6px #63d4ff; }
        .why-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6.5vw, 5.5rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #f0f6ff;
          margin-bottom: 18px;
        }
        .why-title-accent {
          background: linear-gradient(110deg, #63d4ff 0%, #a855f7 55%, #00ff9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .why-subtitle { font-size: 0.93rem; font-weight: 300; color: #3d5470; line-height: 1.75; }

        /* WHY GRID */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          max-width: 1200px;
          margin: 0 auto 80px;
          position: relative;
          z-index: 2;
        }
        .why-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px;
          padding: 24px 20px 20px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .why-card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--wc), transparent);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .why-card:hover { border-color: color-mix(in srgb, var(--wc) 28%, transparent); box-shadow: 0 20px 50px rgba(0,0,0,0.35); transform: translateY(-8px); }
        .why-card:hover::before { opacity: 1; }

        .why-icon {
          width: 42px; height: 42px;
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
          background: color-mix(in srgb, var(--wc) 10%, transparent);
          color: var(--wc);
          border: 1px solid color-mix(in srgb, var(--wc) 18%, transparent);
          transition: box-shadow 0.3s;
        }
        .why-card:hover .why-icon { box-shadow: 0 0 18px color-mix(in srgb, var(--wc) 30%, transparent); }

        .why-metric {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          line-height: 1;
          color: var(--wc);
          margin-bottom: 2px;
        }
        .why-metric-label { font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: #1e3248; margin-bottom: 12px; }
        .why-card h3 { font-family: 'Bebas Neue', sans-serif; font-size: 1.15rem; letter-spacing: 0.04em; color: #f0f6ff; margin-bottom: 8px; line-height: 1.1; }
        .why-card p { font-size: 0.75rem; font-weight: 300; color: #2d4155; line-height: 1.65; }

        /* DIVIDER */
        .why-divider {
          max-width: 1200px;
          margin: 0 auto 72px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,212,255,0.1), rgba(168,85,247,0.1), transparent);
          position: relative;
          z-index: 2;
        }

        /* FAQ */
        .faq-wrap {
          max-width: 760px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .faq-header { text-align: center; margin-bottom: 40px; }
        .faq-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          letter-spacing: 0.04em;
          color: #f0f6ff;
          margin-bottom: 8px;
        }
        .faq-subtitle { font-size: 0.82rem; color: #2d4155; font-weight: 300; }

        .faq-item {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 10px;
          transition: border-color 0.25s;
        }
        .faq-item.open { border-color: rgba(99,212,255,0.2); }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 22px;
          text-align: left;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          color: #94a3b8;
          transition: color 0.2s;
        }
        .faq-item.open .faq-question { color: #f0f6ff; }
        .faq-q-left { display: flex; align-items: center; gap: 12px; }
        .faq-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          color: #1e3248;
          min-width: 24px;
          transition: color 0.25s;
        }
        .faq-item.open .faq-num { color: #63d4ff; }
        .faq-icon {
          width: 26px; height: 26px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          color: #2d4155;
          flex-shrink: 0;
          transition: all 0.25s;
        }
        .faq-item.open .faq-icon { border-color: rgba(99,212,255,0.3); color: #63d4ff; background: rgba(99,212,255,0.07); }

        .faq-answer {
          overflow: hidden;
          padding: 0 22px;
        }
        .faq-answer-inner {
          padding: 0 0 18px 36px;
          font-size: 0.82rem;
          font-weight: 300;
          color: #3d5470;
          line-height: 1.8;
          border-top: 1px solid rgba(255,255,255,0.04);
          padding-top: 14px;
        }

        @media (max-width: 1000px) { .why-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 640px) {
          .why-section { padding: 70px 5vw 90px; }
          .why-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 400px) { .why-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section id="why-section" className="why-section">
        <div className="why-bg-grid" />

        {/* HEADER */}
        <motion.div className="why-header" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
          <div className="why-kicker"><span className="why-kicker-dot" />The Case For Us</div>
          <h2 className="why-title">Why <span className="why-title-accent">Choose Us</span></h2>
          <p className="why-subtitle">Clear process. Honest execution. Long-term value.</p>
        </motion.div>

        {/* WHY GRID */}
        <motion.div className="why-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          {reasons.map((item, i) => (
            <motion.div key={i} className="why-card" style={{ "--wc": item.color }}
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}>
              <div className="why-icon">{item.icon}</div>
              <div className="why-metric">{item.metric}</div>
              <div className="why-metric-label">{item.metricLabel}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="why-divider" />

        {/* FAQ */}
        <div className="faq-wrap">
          <motion.div className="faq-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="faq-title">Common Questions</h3>
            <p className="faq-subtitle">Everything you need to know before starting a project with us.</p>
          </motion.div>

          {faqs.map((item, i) => (
            <motion.div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <div className="faq-q-left">
                  <span className="faq-num">0{i + 1}</span>
                  <span>{item.q}</span>
                </div>
                <motion.span className="faq-icon" animate={{ rotate: openIndex === i ? 45 : 0 }} transition={{ duration: 0.25 }}>
                  <Plus size={13} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="faq-answer-inner">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}