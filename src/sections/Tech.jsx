import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAndroid,
  FaNodeJs,
  FaGithub,
  FaPython
} from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiNetlify,
  SiVercel,
  SiMongodb,
  SiHostinger,
  SiDart,
  SiIos,
  SiClerk,
  SiSupabase
} from "react-icons/si";

const techGroups = [
  {
    title: "Frontend & App",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "iOS", icon: <SiIos /> },
      { name: "Android", icon: <FaAndroid /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> }
    ]
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Clerk", icon: <SiClerk /> },
      { name: "Supabase", icon: <SiSupabase /> }
    ]
  },
  {
    title: "Deployment & Tools",
    items: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Hostinger", icon: <SiHostinger /> }
    ]
  }
];

export default function Tech() {
  return (
    <motion.section
      id="tech-section"
      className="tech-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* HEADER */}
      <motion.div
        className="tech-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Technology <span className="gradient-text">Stack</span>
        </h2>
        <p className="services-subtitle">
          A modern, production-ready stack focused on performance, scalability,
          and maintainability.
        </p>
      </motion.div>

      {/* GROUPS */}
      <div className="tech-groups">
        {techGroups.map((group, i) => (
          <motion.div
            key={i}
            className="tech-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.18, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="tech-group-title">{group.title}</h3>

            {/* GRID */}
            <motion.div
              className="tech-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.06 }
                }
              }}
            >
              {group.items.map((item, j) => (
                <motion.div
                  key={j}
                  className="tech-item glass"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                >
                  <span className="tech-icon">{item.icon}</span>
                  <span className="tech-name">{item.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
