/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Download, Star, ArrowUpRight, X } from "lucide-react";
import { projects } from "../data/projects";

/* ── CATEGORY FILTER TAGS ── */
const ALL = "All";

/* ── STAR RATING ── */
function Stars({ count }) {
  return (
    <div className="stars-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          fill={i < count ? "#f59e0b" : "none"}
          stroke={i < count ? "#f59e0b" : "#2d4155"}
        />
      ))}
    </div>
  );
}

/* ── REVIEW MODAL ── */
function ReviewModal({ project, onClose }) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="review-modal"
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 40 }}
        transition={{ type: "spring", damping: 24, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><X size={15} /></button>
        <div className="modal-project-name">{project.name}</div>
        <Stars count={project.review.rating} />
        <p className="modal-review-text">"{project.review.text}"</p>
        <div className="modal-client">
          <div className="modal-avatar">{project.review.clientName[0]}</div>
          <div>
            <div className="modal-client-name">{project.review.clientName}</div>
            <div className="modal-client-role">{project.review.clientRole}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── PROJECT CARD ── */
function ProjectCard({ project, index, onReview }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="proj-card"
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* Thumbnail */}
      <div className="proj-thumb">
        <img src={project.mockup} alt={project.name} loading="lazy" />

        {/* Overlay on hover */}
        <motion.div
          className="proj-overlay"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="overlay-links">
            {project.links.view && (
              <a href={project.links.view} target="_blank" rel="noreferrer" className="overlay-link">
                <ExternalLink size={16} /> Live
              </a>
            )}
            {project.links.code && (
              <a href={project.links.code} target="_blank" rel="noreferrer" className="overlay-link">
                <Github size={16} /> Code
              </a>
            )}
            {project.links.apk && (
              <a href={project.links.apk} target="_blank" rel="noreferrer" className="overlay-link">
                <Download size={16} /> APK
              </a>
            )}
          </div>
        </motion.div>

        {/* Live badge */}
        <div className="live-badge">
          <span className="live-dot" />
          <span>LIVE</span>
        </div>

        {/* Category tag */}
        <div className="proj-cat-tag">{project.category}</div>
      </div>

      {/* Body */}
      <div className="proj-body">
        <h3 className="proj-title">{project.name}</h3>
        <p className="proj-desc">{project.desc}</p>

        {/* Requirements */}
        <div className="proj-reqs">
          {project.clientRequirements.slice(0, 3).map((req, i) => (
            <div key={i} className="req-item">
              <span className="req-check">✓</span>
              <span>{req}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="proj-footer">
          <button className="review-btn" onClick={() => onReview(project)}>
            <Stars count={project.review.rating} />
            <span>Read review</span>
            <ArrowUpRight size={13} className="review-arrow" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* ── MAIN ── */
export default function Projects() {
  const categories = [ALL, ...new Set(projects.map(p => p.category))];
  const [active, setActive] = useState(ALL);
  const [reviewProject, setReviewProject] = useState(null);

  const filtered = active === ALL ? projects : projects.filter(p => p.category === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .projects-section {
          position: relative;
          background: #04070f;
          padding: 100px 6vw 120px;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          color: #e2e8f0;
        }

        /* BG */
        .projects-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 10% 20%, rgba(99,212,255,0.055) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 90% 80%, rgba(168,85,247,0.055) 0%, transparent 70%);
          pointer-events: none;
        }
        .proj-bg-grid {
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
        .proj-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 56px;
          position: relative;
          z-index: 2;
        }
        .proj-kicker {
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
        .proj-kicker-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #63d4ff;
          box-shadow: 0 0 6px #63d4ff;
        }
        .proj-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #f0f6ff;
          margin-bottom: 20px;
        }
        .proj-title-accent {
          background: linear-gradient(110deg, #63d4ff 0%, #a855f7 60%, #00ff9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .proj-subtitle {
          font-size: 0.95rem;
          font-weight: 300;
          color: #3d5470;
          line-height: 1.75;
        }

        /* FILTER TABS */
        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 48px;
          position: relative;
          z-index: 2;
        }
        .filter-tab {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px;
          padding: 7px 20px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          background: transparent;
          color: #3d5470;
          transition: all 0.25s;
          position: relative;
        }
        .filter-tab:hover { color: #94a3b8; border-color: rgba(255,255,255,0.14); }
        .filter-tab.active {
          background: rgba(99,212,255,0.08);
          border-color: rgba(99,212,255,0.3);
          color: #63d4ff;
        }

        /* GRID */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 20px;
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* CARD */
        .proj-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s, box-shadow 0.3s;
          cursor: default;
        }
        .proj-card:hover {
          border-color: rgba(99,212,255,0.15);
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
        }

        /* THUMB */
        .proj-thumb {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #080e1a;
        }
        .proj-thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .proj-card:hover .proj-thumb img { transform: scale(1.06); }

        /* Overlay */
        .proj-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4,7,15,0.82);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .proj-card:hover .proj-overlay { pointer-events: auto; }
        .overlay-links {
          display: flex;
          gap: 12px;
        }
        .overlay-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          border-radius: 9px;
          border: 1px solid rgba(99,212,255,0.25);
          background: rgba(99,212,255,0.06);
          color: #63d4ff;
          font-size: 0.78rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .overlay-link:hover { background: rgba(99,212,255,0.14); border-color: rgba(99,212,255,0.45); }

        /* Live badge */
        .live-badge {
          position: absolute;
          top: 12px; left: 12px;
          display: flex; align-items: center; gap: 5px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(0,255,157,0.2);
          border-radius: 999px;
          padding: 3px 10px;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: #00ff9d;
        }
        .live-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #00ff9d;
          box-shadow: 0 0 5px #00ff9d;
          animation: livepulse 1.8s infinite;
        }
        @keyframes livepulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Category tag */
        .proj-cat-tag {
          position: absolute;
          top: 12px; right: 12px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 3px 12px;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748b;
        }

        /* BODY */
        .proj-body {
          padding: 20px 22px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .proj-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.55rem;
          letter-spacing: 0.04em;
          color: #f0f6ff;
          margin-bottom: 8px;
          line-height: 1;
        }
        .proj-desc {
          font-size: 0.8rem;
          font-weight: 300;
          color: #3d5470;
          line-height: 1.65;
          margin-bottom: 16px;
        }

        /* Requirements */
        .proj-reqs {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.025);
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .req-item {
          display: flex;
          gap: 8px;
          font-size: 0.73rem;
          color: #3d5470;
          align-items: flex-start;
          line-height: 1.5;
        }
        .req-check { color: #00ff9d; font-size: 0.7rem; flex-shrink: 0; margin-top: 1px; }

        /* Footer */
        .proj-footer { margin-top: auto; }
        .review-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 9px 14px;
          cursor: pointer;
          width: 100%;
          transition: background 0.2s, border-color 0.2s;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          color: #3d5470;
        }
        .review-btn:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.12); color: #64748b; }
        .review-arrow { margin-left: auto; }

        /* STARS */
        .stars-row { display: flex; gap: 2px; align-items: center; flex-shrink: 0; }

        /* NOTE */
        .proj-note {
          text-align: center;
          margin-top: 56px;
          font-size: 0.75rem;
          color: #1e3248;
          letter-spacing: 0.06em;
          position: relative;
          z-index: 2;
        }

        /* ── MODAL ── */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .review-modal {
          background: #0a0f1e;
          border: 1px solid rgba(255,255,255,0.08);
          border-top: 2px solid #63d4ff;
          border-radius: 22px;
          padding: 40px 36px 32px;
          max-width: 440px;
          width: 100%;
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 14px; right: 14px;
          background: rgba(255,255,255,0.05);
          border: none; cursor: pointer;
          color: #3d5470;
          width: 30px; height: 30px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .modal-close:hover { background: rgba(255,255,255,0.1); color: #e2e8f0; }
        .modal-project-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          letter-spacing: 0.04em;
          color: #f0f6ff;
          margin-bottom: 10px;
        }
        .modal-review-text {
          font-size: 0.9rem;
          font-weight: 300;
          color: #4e637a;
          line-height: 1.8;
          margin: 18px 0 24px;
          font-style: italic;
        }
        .modal-client {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .modal-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #63d4ff, #a855f7);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          color: #fff;
          flex-shrink: 0;
        }
        .modal-client-name { font-size: 0.85rem; font-weight: 600; color: #e2e8f0; }
        .modal-client-role { font-size: 0.72rem; color: #3d5470; margin-top: 2px; }

        @media (max-width: 600px) {
          .projects-section { padding: 70px 5vw 90px; }
          .proj-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="projects-section" className="projects-section">
        <div className="proj-bg-grid" />

        {/* HEADER */}
        <motion.div
          className="proj-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="proj-kicker">
            <span className="proj-kicker-dot" />
            Case Studies
          </div>
          <h2 className="proj-section-title">
            Technical<br />
            <span className="proj-title-accent">Showcase</span>
          </h2>
          <p className="proj-subtitle">
            High-performance systems engineered for scalability,
            security, and seamless user experiences.
          </p>
        </motion.div>

        {/* FILTER */}
        <motion.div
          className="filter-bar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* GRID */}
        <motion.div
          className="proj-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={i}
                onReview={setReviewProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* NOTE */}
        <motion.p
          className="proj-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          * More projects available upon request — contact us for details.
        </motion.p>
      </section>

      {/* REVIEW MODAL */}
      <AnimatePresence>
        {reviewProject && (
          <ReviewModal project={reviewProject} onClose={() => setReviewProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}