import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, ArrowUpRight } from "lucide-react";
import { FaFlutter } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export default function Hero({ onStartProject }) {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Decorative Grid */}
      <div className="grid-background" />

      <motion.div
        className="hero-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Status Badge */}
        <div className="badge glass premium-border">
          <span className="red-dot"></span>
          <span className="cyan-text">We Develop Websites & Apps</span>
        </div>

        <motion.h1
  className="hero-title"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  We Design, Build & Deliver <br />
  <span className="gradient-text">Websites & Apps</span>
</motion.h1>


        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <strong>Shaurya IT Services</strong> builds high-quality websites and
          powerful web & mobile applications engineered for performance,
          scalability, and long-term growth.
        </motion.p>

        {/* CTA BUTTON */}
        <div className="hero-actions">
          <motion.button
            className="btn-primary"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(99, 102, 241, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartProject}
          >
            Start Project Now <ArrowUpRight size={18} />
          </motion.button>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack-row">
          <TechLabel Icon={Code2} text="React & Node.js" />
          <TechLabel Icon={Cpu} text="AI Integration" />
          <TechLabel Icon={FaFlutter} text="Flutter & Dart" />
        </div>
      </motion.div>
    </motion.section>
  );
}

// eslint-disable-next-line react/prop-types
function TechLabel({ Icon, text }) {
  return (
    <motion.div className="tech-label" whileHover={{ y: -5 }}>
      <Icon size={16} className="purple-text" />
      <span>{text}</span>
    </motion.div>
  );
}
