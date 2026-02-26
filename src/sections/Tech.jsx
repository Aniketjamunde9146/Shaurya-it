import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaAndroid,
  FaNodeJs, FaGithub, FaPython
} from "react-icons/fa";
import {
  SiFlutter, SiFirebase, SiTypescript, SiJavascript,
  SiNetlify, SiVercel, SiMongodb, SiHostinger,
  SiDart, SiIos, SiClerk, SiSupabase, SiNextdotjs
} from "react-icons/si";

/* ─── DATA ─────────────────────────────────────────────────────── */
const techGroups = [
  {
    id: "frontend",
    title: "Frontend & App",
    emoji: "🖥️",
    color: "#6ee7f7",
    description: "Pixel-perfect UIs for web, mobile & beyond",
    items: [
      { name: "React",       icon: <FaReact />,      color: "#61DAFB", level: 95 },
      { name: "Next.js",     icon: <SiNextdotjs />,  color: "#ffffff", level: 90 },
      { name: "Flutter",     icon: <SiFlutter />,    color: "#54C5F8", level: 85 },
      { name: "Dart",        icon: <SiDart />,       color: "#00B4AB", level: 82 },
      { name: "iOS",         icon: <SiIos />,        color: "#aaaaaa", level: 70 },
      { name: "Android",     icon: <FaAndroid />,    color: "#3DDC84", level: 75 },
      { name: "TypeScript",  icon: <SiTypescript />, color: "#3178C6", level: 92 },
      { name: "JavaScript",  icon: <SiJavascript />, color: "#F7DF1E", level: 97 },
      { name: "HTML",        icon: <FaHtml5 />,      color: "#E34F26", level: 98 },
      { name: "CSS",         icon: <FaCss3Alt />,    color: "#1572B6", level: 95 },
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    emoji: "⚙️",
    color: "#a78bfa",
    description: "Robust, scalable server-side infrastructure",
    items: [
      { name: "Node.js",   icon: <FaNodeJs />,    color: "#68A063", level: 88 },
      { name: "Firebase",  icon: <SiFirebase />,  color: "#FFCA28", level: 90 },
      { name: "MongoDB",   icon: <SiMongodb />,   color: "#47A248", level: 84 },
      { name: "Clerk",     icon: <SiClerk />,     color: "#6C47FF", level: 80 },
      { name: "Supabase",  icon: <SiSupabase />,  color: "#3ECF8E", level: 78 },
    ]
  },
  {
    id: "devops",
    title: "Deployment & Tools",
    emoji: "🚀",
    color: "#fb923c",
    description: "Ship fast, monitor everything, scale confidently",
    items: [
      { name: "GitHub",    icon: <FaGithub />,    color: "#ffffff", level: 95 },
      { name: "Vercel",    icon: <SiVercel />,    color: "#ffffff", level: 92 },
      { name: "Netlify",   icon: <SiNetlify />,   color: "#00C7B7", level: 88 },
      { name: "Hostinger", icon: <SiHostinger />, color: "#673DE6", level: 80 },
    ]
  }
];

const allItems = techGroups.flatMap(g => g.items.map(i => ({ ...i, group: g.id })));

/* ─── SUB-COMPONENTS ────────────────────────────────────────────── */

function TechCard({ item, groupColor, onClick, isActive }) {
  return (
    <motion.button
      layout
      onClick={() => onClick(item)}
      className="tech-card"
      style={{ "--accent": item.color, "--group-color": groupColor }}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      aria-label={item.name}
      data-active={isActive}
    >
      <span className="card-glow" />
      <span className="card-icon">{item.icon}</span>
      <span className="card-name">{item.name}</span>
      <span className="card-level-bar">
        <motion.span
          className="card-level-fill"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: item.level / 100 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </span>
      <span className="card-level-text">{item.level}%</span>
    </motion.button>
  );
}

function SkillModal({ item, onClose }) {
  if (!item) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-card"
          style={{ "--accent": item.color }}
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 40 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>✕</button>
          <div className="modal-icon">{item.icon}</div>
          <h3 className="modal-title">{item.name}</h3>
          <div className="modal-bar-wrap">
            <div className="modal-label">Proficiency</div>
            <div className="modal-track">
              <motion.div
                className="modal-fill"
                initial={{ width: 0 }}
                animate={{ width: `${item.level}%` }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="modal-pct">{item.level}%</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */
export default function Tech() {
  const [activeGroup, setActiveGroup] = useState("all");
  const [search, setSearch]         = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode]     = useState("grid"); // "grid" | "list"

  const filtered = (activeGroup === "all" ? allItems : allItems.filter(i => i.group === activeGroup))
    .filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

  const totalTech = allItems.length;
  const avgLevel  = Math.round(allItems.reduce((a, b) => a + b.level, 0) / totalTech);

  return (
    <>
      {/* ── STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .tech-section {
          font-family: 'DM Sans', sans-serif;
          background: #080b14;
          min-height: 100vh;
          width: 100%;
          padding: 100px 5vw;
          color: #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        /* Ambient background orbs */
        .tech-section::before, .tech-section::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        .tech-section::before {
          width: 600px; height: 600px;
          top: -200px; left: -150px;
          background: radial-gradient(circle, rgba(110,231,247,0.08), transparent 70%);
        }
        .tech-section::after {
          width: 500px; height: 500px;
          bottom: -150px; right: -100px;
          background: radial-gradient(circle, rgba(167,139,250,0.10), transparent 70%);
        }

        /* Header */
        .tech-header { text-align: center; margin-bottom: 56px; position: relative; z-index: 1; }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #f1f5f9;
          margin: 0 0 14px;
          line-height: 1.1;
        }
        .gradient-text {
          background: linear-gradient(135deg, #6ee7f7 20%, #a78bfa 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tech-subtitle {
          color: #64748b;
          font-size: 1.05rem;
          font-weight: 300;
          max-width: 480px;
          margin: 0 auto 32px;
          line-height: 1.7;
        }

        /* Stats bar */
        .stats-bar {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .stat-chip {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 8px 22px;
          font-size: 0.82rem;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .stat-chip strong { color: #e2e8f0; font-size: 1rem; }

        /* Controls */
        .controls {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }
        .filter-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .pill {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 7px 18px;
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          background: transparent;
          color: #64748b;
          transition: all 0.25s;
          font-family: 'DM Sans', sans-serif;
        }
        .pill:hover { color: #e2e8f0; border-color: rgba(255,255,255,0.25); }
        .pill.active {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.25);
          color: #e2e8f0;
        }
        .search-wrap {
          position: relative;
        }
        .search-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 8px 18px 8px 38px;
          color: #e2e8f0;
          font-size: 0.82rem;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          width: 180px;
          transition: border-color 0.25s, width 0.3s;
        }
        .search-input:focus { border-color: rgba(110,231,247,0.4); width: 220px; }
        .search-input::placeholder { color: #475569; }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.8rem;
          color: #475569;
          pointer-events: none;
        }
        .view-toggle {
          display: flex;
          gap: 4px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 4px;
        }
        .view-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #475569;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 0.8rem;
          transition: all 0.2s;
          font-family: inherit;
        }
        .view-btn.active { background: rgba(255,255,255,0.1); color: #e2e8f0; }

        /* Cards grid */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        .tech-grid.list-mode {
          grid-template-columns: 1fr;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Card */
        .tech-card {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 20px 12px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s, background 0.3s;
          text-align: center;
        }
        .tech-grid.list-mode .tech-card {
          flex-direction: row;
          padding: 14px 20px;
          gap: 14px;
          text-align: left;
          border-radius: 12px;
        }
        .tech-card:hover { border-color: rgba(255,255,255,0.18); background: rgba(255,255,255,0.055); }
        .tech-card[data-active="true"] { border-color: var(--accent, #6ee7f7); }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, var(--accent, #6ee7f7), transparent 65%);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .tech-card:hover .card-glow { opacity: 0.06; }

        .card-icon {
          font-size: 2rem;
          color: var(--accent, #e2e8f0);
          line-height: 1;
          filter: drop-shadow(0 0 10px color-mix(in srgb, var(--accent) 40%, transparent));
          flex-shrink: 0;
        }
        .tech-grid.list-mode .card-icon { font-size: 1.5rem; }

        .card-name {
          font-size: 0.75rem;
          font-weight: 500;
          color: #94a3b8;
          letter-spacing: 0.01em;
          line-height: 1;
        }
        .tech-grid.list-mode .card-name { font-size: 0.9rem; color: #e2e8f0; flex: 1; }

        /* Level bar inside card */
        .card-level-bar {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.07);
          border-radius: 99px;
          overflow: hidden;
          margin-top: 2px;
        }
        .tech-grid.list-mode .card-level-bar { flex: 1; height: 3px; margin-top: 0; }
        .card-level-fill {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, var(--accent, #6ee7f7), color-mix(in srgb, var(--accent) 50%, #a78bfa));
          border-radius: 99px;
          transform-origin: left;
        }
        .card-level-text {
          font-size: 0.65rem;
          color: #475569;
        }
        .tech-grid.list-mode .card-level-text { font-size: 0.78rem; color: #64748b; min-width: 36px; text-align: right; }

        /* Group sections */
        .group-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          margin-top: 12px;
        }
        .group-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--gc, #6ee7f7);
          box-shadow: 0 0 8px var(--gc, #6ee7f7);
          flex-shrink: 0;
        }
        .group-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #64748b;
        }
        .group-desc { font-size: 0.72rem; color: #334155; margin-left: auto; }

        /* Empty state */
        .empty-state {
          text-align: center;
          padding: 64px;
          color: #334155;
          font-size: 0.9rem;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-card {
          background: #0f1420;
          border: 1px solid rgba(255,255,255,0.1);
          border-top: 2px solid var(--accent, #6ee7f7);
          border-radius: 20px;
          padding: 40px 36px 32px;
          min-width: 280px;
          max-width: 360px;
          width: 90vw;
          position: relative;
          text-align: center;
        }
        .modal-close {
          position: absolute;
          top: 14px; right: 14px;
          background: rgba(255,255,255,0.05);
          border: none; cursor: pointer;
          color: #64748b;
          width: 30px; height: 30px;
          border-radius: 50%;
          font-size: 0.75rem;
          transition: all 0.2s;
        }
        .modal-close:hover { color: #e2e8f0; background: rgba(255,255,255,0.1); }
        .modal-icon {
          font-size: 3.5rem;
          color: var(--accent, #6ee7f7);
          filter: drop-shadow(0 0 18px color-mix(in srgb, var(--accent) 60%, transparent));
          margin-bottom: 12px;
        }
        .modal-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #f1f5f9;
          margin: 0 0 24px;
        }
        .modal-bar-wrap { display: flex; flex-direction: column; gap: 8px; }
        .modal-label { font-size: 0.72rem; color: #475569; letter-spacing: 0.1em; text-transform: uppercase; }
        .modal-track {
          height: 6px;
          background: rgba(255,255,255,0.07);
          border-radius: 99px;
          overflow: hidden;
        }
        .modal-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent, #6ee7f7), #a78bfa);
          border-radius: 99px;
        }
        .modal-pct {
          font-size: 1.8rem;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          color: var(--accent, #6ee7f7);
        }

        @media (max-width: 600px) {
          .tech-section { padding: 64px 4vw; }
          .controls { gap: 8px; }
        }
      `}</style>

      <section id="tech-section" className="tech-section">

        {/* HEADER */}
        <motion.div
          className="tech-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="tech-subtitle">
            A modern, production-ready stack focused on performance, scalability, and maintainability.
          </p>

          {/* Stats */}
          <div className="stats-bar">
            <div className="stat-chip"><strong>{totalTech}</strong> technologies</div>
            <div className="stat-chip"><strong>{techGroups.length}</strong> categories</div>
            <div className="stat-chip">Avg. proficiency <strong>{avgLevel}%</strong></div>
          </div>
        </motion.div>

        {/* CONTROLS */}
        <motion.div
          className="controls"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="filter-pills">
            <button
              className={`pill ${activeGroup === "all" ? "active" : ""}`}
              onClick={() => setActiveGroup("all")}
            >All</button>
            {techGroups.map(g => (
              <button
                key={g.id}
                className={`pill ${activeGroup === g.id ? "active" : ""}`}
                onClick={() => setActiveGroup(g.id)}
              >{g.emoji} {g.title}</button>
            ))}
          </div>

          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="view-toggle">
            <button className={`view-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}>⊞ Grid</button>
            <button className={`view-btn ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")}>☰ List</button>
          </div>
        </motion.div>

        {/* CONTENT */}
        {activeGroup === "all" ? (
          /* Show grouped when "all" selected */
          techGroups.map((group, gi) => {
            const items = group.items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
            if (!items.length) return null;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: gi * 0.12 }}
                viewport={{ once: true }}
                style={{ marginBottom: 40, position: "relative", zIndex: 1 }}
              >
                <div className="group-header" style={{ "--gc": group.color }}>
                  <span className="group-dot" />
                  <span className="group-label">{group.title}</span>
                  <span className="group-desc">{group.description}</span>
                </div>
                <div className={`tech-grid ${viewMode === "list" ? "list-mode" : ""}`}>
                  <AnimatePresence>
                    {items.map((item) => (
                      <TechCard
                        key={item.name}
                        item={item}
                        groupColor={group.color}
                        onClick={setSelectedItem}
                        isActive={selectedItem?.name === item.name}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })
        ) : (
          /* Flat grid for filtered group */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            {filtered.length === 0 ? (
              <div className="empty-state">No results for "{search}"</div>
            ) : (
              <div className={`tech-grid ${viewMode === "list" ? "list-mode" : ""}`}>
                <AnimatePresence>
                  {filtered.map(item => (
                    <TechCard
                      key={item.name}
                      item={item}
                      groupColor={techGroups.find(g => g.id === item.group)?.color || "#6ee7f7"}
                      onClick={setSelectedItem}
                      isActive={selectedItem?.name === item.name}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <SkillModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
}