import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Download } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <motion.section
    id="projects-section"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* This div calls your saved CSS class. 
        It ensures the technical grid stays consistent 
      */}
      <div className="grid-background" />

      <div className="section-header">
        <motion.div 
          className="badge glass premium-border"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <span className="red-dot"></span>
          <span className="cyan-text">Case Studies</span>
        </motion.div>

        <motion.h1
          className="hero-title2"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Technical <span className="gradient-text">Showcase</span>
        </motion.h1>

        <motion.p
          className="projects-trust"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A collection of high-performance systems, engineered for scalability, 
          security, and seamless user experiences.
        </motion.p>
      </div>

      <motion.div
        className="projects-grid small"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card small glass premium-border"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -10, borderColor: "rgba(255, 77, 77, 0.3)" }}
          >
            <div className="project-thumb">
              <img src={project.mockup} alt={project.name} />
              <div className="card-status">
                <span className="red-dot"></span>
                <span className="status-label">LIVE</span>
              </div>
            </div>

            <div className="project-meta">
              <span className="project-badge">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </div>

            <div className="project-actions compact">
              {project.links.view && (
                <a href={project.links.view} target="_blank" rel="noreferrer" className="action-link">
                  <ExternalLink size={14} />
                </a>
              )}
              {project.links.code && (
                <a href={project.links.code} target="_blank" rel="noreferrer" className="action-link">
                  <Github size={14} />
                </a>
              )}
              {project.links.apk && (
                <a href={project.links.apk} target="_blank" rel="noreferrer" className="action-link">
                  <Download size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="projects-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        * More projects available upon request. Contact us for details.
      </motion.p>
    </motion.section>
  );
}