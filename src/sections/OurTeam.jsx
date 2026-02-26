/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe, Code2, Smartphone, Palette } from "lucide-react";

const team = [
  {
    name: "Aniket Jamunde",
    role: "Co-Founder & Mobile Developer",
    photo: "/founder.png",
    bio: "I design and develop premium web and mobile applications with an Apple-inspired UI, focusing on performance, scalability, and clean user experience.",
    color: "#63d4ff",
    skills: ["Flutter", "Dart", "Cross-Platform", "iOS & Android"],
    icons: [<Smartphone size={13} />, <Code2 size={13} />],
    links: { github: "#", linkedin: "#" },
    stat: { label: "Apps Shipped", value: "6+" },
  },
  {
    name: "Priti Surase",
    role: "Co-Founder & Full Stack Developer",
    photo: "/cofounder.png",
    bio: "I craft modern, intuitive interfaces and user journeys that feel smooth, minimal, and aligned with iOS & macOS design standards.",
    color: "#a855f7",
    skills: ["React", "Node.js", "UI & UX", "Full Stack"],
    icons: [<Palette size={13} />, <Globe size={13} />],
    links: { github: "#", linkedin: "#" },
    stat: { label: "Sites Launched", value: "4+" },
  },
];

function TeamCard({ member, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="team-card"
      style={{ "--c": member.color }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1, y: 0,
          transition: { duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* Top accent line */}
      <div className="card-top-line" />

      {/* Photo + overlay */}
      <div className="card-photo-wrap">
        <img src={member.photo} alt={member.name} className="card-photo" />

        {/* Floating stat badge */}
        <motion.div
          className="card-stat"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.25 }}
        >
          <span className="stat-val">{member.stat.value}</span>
          <span className="stat-lbl">{member.stat.label}</span>
        </motion.div>

        {/* Color tint overlay */}
        <div className="photo-tint" />
      </div>

      {/* Body */}
      <div className="card-body">
        {/* Role pill */}
        <div className="role-pill">
          {member.icons.map((ic, i) => <span key={i} className="role-icon">{ic}</span>)}
          {member.role}
        </div>

        <h3 className="member-name">{member.name}</h3>
        <p className="member-bio">{member.bio}</p>

        {/* Skills */}
        <div className="skill-chips">
          {member.skills.map(s => (
            <span key={s} className="skill-chip">{s}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="card-footer">
          <div className="social-links">
            {member.links.github && (
              <a href={member.links.github} className="social-btn" aria-label="GitHub">
                <Github size={14} />
              </a>
            )}
            {member.links.linkedin && (
              <a href={member.links.linkedin} className="social-btn" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
            )}
          </div>
          <div className="availability">
            <span className="avail-dot" />
            <span className="avail-text">Available</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurTeam() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .team-section {
          position: relative;
          background: #04070f;
          padding: 100px 6vw 120px;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          color: #e2e8f0;
        }

        /* BG */
        .team-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 45% at 0% 50%, rgba(99,212,255,0.05), transparent 65%),
            radial-gradient(ellipse 50% 45% at 100% 50%, rgba(168,85,247,0.06), transparent 65%);
          pointer-events: none;
        }
        .team-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
          pointer-events: none;
        }

        /* HEADER */
        .team-header {
          text-align: center;
          max-width: 540px;
          margin: 0 auto 72px;
          position: relative;
          z-index: 2;
        }
        .team-kicker {
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
        .team-kicker-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #a855f7;
          box-shadow: 0 0 6px #a855f7;
        }
        .team-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6.5vw, 5.5rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #f0f6ff;
          margin-bottom: 18px;
        }
        .team-title-accent {
          background: linear-gradient(110deg, #63d4ff 0%, #a855f7 55%, #00ff9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .team-subtitle {
          font-size: 0.93rem;
          font-weight: 300;
          color: #3d5470;
          line-height: 1.75;
        }

        /* CARDS ROW */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 860px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* CARD */
        .team-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: border-color 0.35s, box-shadow 0.35s;
        }
        .team-card:hover {
          border-color: color-mix(in srgb, var(--c) 28%, transparent);
          box-shadow: 0 28px 70px rgba(0,0,0,0.42),
                      0 0 0 1px color-mix(in srgb, var(--c) 8%, transparent);
        }

        /* Top accent line */
        .card-top-line {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--c) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .team-card:hover .card-top-line { opacity: 1; }

        /* Photo */
        .card-photo-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #070c17;
        }
        .card-photo {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.6s ease, filter 0.4s;
          filter: grayscale(20%);
        }
        .team-card:hover .card-photo {
          transform: scale(1.06);
          filter: grayscale(0%);
        }
        .photo-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(4,7,15,0.85) 100%
          );
          pointer-events: none;
        }

        /* Floating stat */
        .card-stat {
          position: absolute;
          top: 14px; right: 14px;
          background: rgba(4,7,15,0.75);
          backdrop-filter: blur(10px);
          border: 1px solid color-mix(in srgb, var(--c) 25%, transparent);
          border-radius: 12px;
          padding: 8px 14px;
          text-align: center;
        }
        .stat-val {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          line-height: 1;
          color: var(--c);
        }
        .stat-lbl {
          display: block;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2d4155;
          margin-top: 2px;
        }

        /* Body */
        .card-body {
          padding: 22px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        /* Role pill */
        .role-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--c);
          background: color-mix(in srgb, var(--c) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--c) 18%, transparent);
          border-radius: 999px;
          padding: 4px 12px;
          width: fit-content;
        }
        .role-icon { display: flex; align-items: center; }

        /* Name */
        .member-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          letter-spacing: 0.04em;
          color: #f0f6ff;
          line-height: 1;
          margin: 0;
        }

        /* Bio */
        .member-bio {
          font-size: 0.8rem;
          font-weight: 300;
          color: #3d5470;
          line-height: 1.7;
          margin: 0;
        }

        /* Skills */
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .skill-chip {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: #2d4155;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          padding: 3px 10px;
          transition: all 0.25s;
        }
        .team-card:hover .skill-chip {
          border-color: color-mix(in srgb, var(--c) 18%, transparent);
          color: color-mix(in srgb, var(--c) 70%, #94a3b8);
        }

        /* Footer */
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.04);
          margin-top: auto;
        }
        .social-links { display: flex; gap: 8px; }
        .social-btn {
          width: 32px; height: 32px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          display: flex; align-items: center; justify-content: center;
          color: #2d4155;
          text-decoration: none;
          transition: all 0.22s;
        }
        .social-btn:hover {
          border-color: color-mix(in srgb, var(--c) 30%, transparent);
          color: var(--c);
          background: color-mix(in srgb, var(--c) 08%, transparent);
        }
        .availability {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .avail-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #00ff9d;
          box-shadow: 0 0 6px #00ff9d;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .avail-text {
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1e3248;
        }

        /* BOTTOM NOTE */
        .team-note {
          text-align: center;
          margin-top: 60px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .note-text {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1e3248;
        }
        .note-divider {
          width: 1px; height: 40px;
          background: linear-gradient(180deg, rgba(99,212,255,0.3), transparent);
        }

        @media (max-width: 640px) {
          .team-section { padding: 70px 5vw 90px; }
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="team" className="team-section">
        <div className="team-bg-grid" />

        {/* HEADER */}
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="team-kicker">
            <span className="team-kicker-dot" />
            The People Behind It
          </div>
          <h2 className="team-title">
            Meet Our<br />
            <span className="team-title-accent">Team</span>
          </h2>
          <p className="team-subtitle">
            Two builders obsessed with crafting high-performance
            digital products that stand out.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="team-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          className="team-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="note-divider" />
          <p className="note-text">Small team. Big output. Zero compromise.</p>
        </motion.div>
      </section>
    </>
  );
}