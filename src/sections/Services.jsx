/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Gamepad2,
  Cloud,
  Wrench,
  ShieldCheck,
  Zap,
  Layers
} from "lucide-react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAndroid,
  FaNodeJs,
  FaGithub
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiNetlify,
  SiVercel,
  SiMongodb
} from "react-icons/si";

export default function Services() {
  return (
    <motion.section
      id="services-section"
      className="services-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* TITLE */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        What I <span className="gradient-text">Build</span>
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        className="services-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
      >
        End-to-end development services focused on performance, scalability,
        and real-world usability.
      </motion.p>

      {/* GRID */}
      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } }
        }}
      >
        <ServiceCard
          icon={<Code2 size={22} />}
          title="Web Development"
          highlights={[
            { icon: <Layers size={14} />, text: "SPA & dashboard systems" },
            { icon: <ShieldCheck size={14} />, text: "Auth & secure APIs" },
            { icon: <Zap size={14} />, text: "SEO & performance focused" }
          ]}
          tech={[
            FaReact,
            SiTypescript,
            FaHtml5,
            FaCss3Alt,
            SiFirebase,
            SiMongodb,
            FaGithub
          ]}
        />

        <ServiceCard
          icon={<Smartphone size={22} />}
          title="App Development"
          highlights={[
            { icon: <Layers size={14} />, text: "Real-feature Android apps" },
            { icon: <ShieldCheck size={14} />, text: "Auth, DB & APIs" },
            { icon: <Zap size={14} />, text: "Play Store ready builds" }
          ]}
          tech={[
            SiFlutter,
            FaAndroid,
            SiFirebase,
            SiMongodb
          ]}
        />

        <ServiceCard
          icon={<Gamepad2 size={22} />}
          title="Game Development"
          highlights={[
            { icon: <Layers size={14} />, text: "Multiplayer & AI logic" },
            { icon: <Zap size={14} />, text: "Optimized performance" },
            { icon: <ShieldCheck size={14} />, text: "Offline gameplay" }
          ]}
          tech={[
            SiJavascript,
            FaNodeJs
          ]}
        />

        <ServiceCard
          icon={<Cloud size={22} />}
          title="Deployment & Hosting"
          highlights={[
            { icon: <Zap size={14} />, text: "Production deployments" },
            { icon: <Layers size={14} />, text: "Domains & hosting" },
            { icon: <ShieldCheck size={14} />, text: "CI-ready builds" }
          ]}
          tech={[
            SiFirebase,
            SiNetlify,
            SiVercel,
            FaGithub
          ]}
        />

        <ServiceCard
          icon={<Wrench size={22} />}
          title="Maintenance & Support"
          highlights={[
            { icon: <ShieldCheck size={14} />, text: "Bug fixes & upgrades" },
            { icon: <Zap size={14} />, text: "Performance tuning" },
            { icon: <Layers size={14} />, text: "Feature improvements" }
          ]}
          tech={[
            FaReact,
            SiFlutter,
            SiFirebase
          ]}
        />
      </motion.div>
    </motion.section>
  );
}

/* CARD COMPONENT */
// eslint-disable-next-line react/prop-types
function ServiceCard({ icon, title, highlights, tech }) {
  return (
    <motion.div
      className="service-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      {/* HEADER */}
      <motion.div
        className="service-head"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
      </motion.div>

      {/* FEATURES */}
      <ul className="service-features">
        {highlights.map((item, i) => (
          <motion.li
            key={`${title}-feature-${i}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
          >
            <span className="feature-icon">{item.icon}</span>
            {item.text}
          </motion.li>
        ))}
      </ul>

      {/* TECH STACK */}
      <motion.div
        className="service-tech"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.05 } }
        }}
      >
        {tech.map((Icon, i) => (
          <motion.span
            key={`${title}-tech-${i}`}
            className="tech-icon"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ y: -4 }}
          >
            <Icon size={18} />
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
