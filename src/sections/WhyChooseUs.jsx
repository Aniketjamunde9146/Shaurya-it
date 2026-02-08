import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Code2,
  Layers,
  Timer,
  Wrench,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

/* WHY CARDS */
const reasons = [
  {
    title: "Engineering-First Approach",
    desc: "Every project is built with scalability, performance, and clean architecture.",
    icon: <Code2 size={22} />,
    color: "var(--cyan)"
  },
  {
    title: "Real Project Experience",
    desc: "Hands-on experience building real apps, games, and production-ready systems.",
    icon: <Layers size={22} />,
    color: "var(--accent)"
  },
  {
    title: "Fast & Focused Execution",
    desc: "Clear milestones and rapid development cycles.",
    icon: <Rocket size={22} />,
    color: "var(--purple)"
  },
  {
    title: "Transparent Communication",
    desc: "Honest timelines and clear technical discussions.",
    icon: <ShieldCheck size={22} />,
    color: "#10b981"
  },
  {
    title: "Long-Term Support",
    desc: "Maintenance, upgrades, and improvements after launch.",
    icon: <Wrench size={22} />,
    color: "#ef4444"
  }
];

/* FAQ */
const faqs = [
  {
    q: "Why should we choose you for our project?",
    a: "You should choose us because we focus on building real, working products — not just designs. Every project is approached with an engineering mindset, clean architecture, and long-term scalability in mind. We believe in clear communication, honest timelines, and delivering exactly what is promised, without shortcuts or unnecessary complexity."
  },
  {
    q: "Can you build both Android and iOS applications?",
    a: "Yes. We build cross-platform mobile applications that work smoothly on both Android and iOS using modern frameworks like Flutter. This allows faster development, consistent performance across devices, and lower overall cost, while still maintaining a high-quality user experience."
  },
  {
    q: "Do you handle both design and development?",
    a: "Yes. We manage the complete process — from UI/UX design to frontend, backend, and deployment. This means you don’t need to coordinate with multiple teams. Everything is planned and built together, ensuring the design matches functionality perfectly."
  },
  {
    q: "What kind of projects do you usually work on?",
    a: "We work on web applications, mobile apps, games, dashboards, admin panels, and startup products. Some projects are client-based, while others are self-initiated or concept projects created to demonstrate real-world development skills and production-level quality."
  },
  {
    q: "Will you provide support after the project is delivered?",
    a: "Yes. Support does not end at launch. We provide post-launch assistance including bug fixes, performance improvements, feature updates, and technical guidance to ensure your product remains stable and future-ready."
  }
];


export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.section
    id="why-section"
      className="why-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* HEADER */}
      <div className="why-header">
        <h2 className="hero-title2">
          Why <span className="gradient-text">Choose Us</span>
        </h2>
        <p className="services-subtitle">
          Clear process. Honest execution. Long-term value.
        </p>
      </div>

      {/* WHY GRID */}
      <div className="why-grid">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            className="why-card glass"
            whileHover={{ y: -8, borderColor: item.color }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="why-icon"
              style={{
                background: `${item.color}20`,
                color: item.color
              }}
            >
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h3 className="faq-title">Frequently Asked Questions</h3>

        {faqs.map((item, i) => (
          <div key={i} className="faq-item glass">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{item.q}</span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
