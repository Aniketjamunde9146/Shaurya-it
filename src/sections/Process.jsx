import { motion } from "framer-motion";
import {
  MessageSquare,
  PencilRuler,
  Code2,
  Rocket,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    points: [
      "Understand goals & scope",
      "Identify core requirements",
      "Define system foundation"
    ],
    icon: <MessageSquare size={24} />,
    color: "var(--cyan)"
  },
  {
    num: "02",
    title: "Strategy",
    points: [
      "UI / UX flow planning",
      "Technology stack selection",
      "Architecture decisions"
    ],
    icon: <PencilRuler size={24} />,
    color: "var(--accent)"
  },
  {
    num: "03",
    title: "Development",
    points: [
      "Feature-by-feature build",
      "Testing & optimization",
      "Performance validation"
    ],
    icon: <Code2 size={24} />,
    color: "var(--purple)"
  },
  {
    num: "04",
    title: "Deployment",
    points: [
      "Production launch",
      "Final system checks",
      "Post-launch support"
    ],
    icon: <Rocket size={24} />,
    color: "#10b981"
  }
];

export default function Process() {
  return (
    <motion.section
    id="process-section-premium"
      className="process-section-premium"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* HEADER */}
      <motion.div
        className="process-header-v2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
      >
        <h2 className="hero-title2">
          Strategic <span className="gradient-text">Workflow</span>
        </h2>

        <div className="process-status-tag glass">
          <div className="red-dot" />
          SYSTEM OPTIMIZED
        </div>
      </motion.div>

      {/* STEPS */}
      <motion.div
        className="process-grid-premium"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.18 }
          }
        }}
      >
        {steps.map((step, i) => (
          <div key={i} className="process-step-wrapper">
            <motion.div
              className="process-step-card glass"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.92 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, borderColor: step.color }}
            >
              {/* NUMBER */}
              <div className="step-number">{step.num}</div>

              {/* ICON */}
              <div
                className="step-icon-box"
                style={{
                  background: `${step.color}20`,
                  color: step.color
                }}
              >
                {step.icon}
              </div>

              {/* TITLE */}
              <h3 className="step-title">{step.title}</h3>

              {/* KEY POINTS */}
              <ul className="step-points">
                {step.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* GLOW */}
              <div
                className="step-glow"
                style={{ background: step.color }}
              />
            </motion.div>

            {/* CONNECTOR */}
            {i !== steps.length - 1 && (
              <div className="process-connector">
                <ArrowRight className="connector-arrow" />
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
