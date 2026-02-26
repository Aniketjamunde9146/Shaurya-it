import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const LINES = [
  "INITIALIZING CORE SYSTEMS",
  "LOADING DESIGN ENGINE",
  "COMPILING COMPONENTS",
  "DEPLOYING INTERFACE",
];

export default function Splash({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const rootRef = useRef(null);

  // Mouse tracking for glow
  const handleMouseMove = (e) => {
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(ticker); return 100; }
        return p + 1.8;
      });
    }, 42);

    const lineCycle = setInterval(() => {
      setLineIdx((i) => (i + 1) % LINES.length);
    }, 700);

    return () => { clearInterval(ticker); clearInterval(lineCycle); };
  }, []);

  const glowX = `${mouse.x * 100}%`;
  const glowY = `${mouse.y * 100}%`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@300;400&display=swap');

        .sp {
          position: fixed; inset: 0; z-index: 9999;
          background: #07090f;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          font-family: 'DM Mono', monospace;
          cursor: none;
          overflow: hidden;
        }

        /* Interactive radial glow that follows mouse */
        .sp-glow {
          position: absolute; inset: 0;
          background: radial-gradient(
            600px circle at var(--gx) var(--gy),
            rgba(99,212,255,0.07),
            transparent 60%
          );
          pointer-events: none;
          transition: background 0.1s ease;
        }

        /* Subtle noise grain */
        .sp-grain {
          position: absolute; inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
          pointer-events: none;
        }

        /* Custom cursor */
        .sp-cursor {
          position: absolute;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #63d4ff;
          pointer-events: none;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 12px #63d4ff;
          transition: transform 0.08s ease;
          z-index: 10;
        }

        .sp-center {
          position: relative; z-index: 2;
          display: flex; flex-direction: column;
          align-items: center; gap: 0;
        }

        .sp-logo {
          width: 48px; height: 48px;
          object-fit: contain;
          border-radius: 12px;
          margin-bottom: 32px;
          filter: drop-shadow(0 0 16px rgba(99,212,255,0.4));
        }

        .sp-label {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(99,212,255,0.3);
          margin-bottom: 16px;
        }

        .sp-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          line-height: 0.92;
          letter-spacing: -0.01em;
          color: #eaf4ff;
          text-align: center;
          margin: 0;
        }

        .sp-accent {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(99,212,255,0.5);
        }

        /* Status */
        .sp-status {
          display: flex; align-items: center; gap: 10px;
          margin-top: 32px; height: 16px;
        }
        .sp-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #00ff9d;
          animation: blink 1.2s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0.15} }
        .sp-status-text {
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
        }

        /* Progress */
        .sp-footer {
          position: absolute; bottom: 40px;
          left: 50%; transform: translateX(-50%);
          width: 240px; z-index: 2;
          display: flex; flex-direction: column; gap: 10px;
        }
        .sp-meta {
          display: flex; justify-content: space-between;
          font-size: 0.55rem; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.12);
        }
        .sp-pct { color: rgba(99,212,255,0.5); }
        .sp-track {
          height: 1px;
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          overflow: hidden;
          position: relative;
        }
        .sp-fill {
          height: 100%;
          background: linear-gradient(90deg, #63d4ff, #a855f7);
          border-radius: 999px;
        }
        .sp-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent);
          animation: shimmer 1.6s infinite;
        }
        @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(300%)} }
      `}</style>

      <motion.div
        ref={rootRef}
        className="sp"
        onMouseMove={handleMouseMove}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: "blur(12px)", transition: { duration: 0.6, ease: [0.22,1,0.36,1] } }}
      >
        {/* Mouse-reactive glow */}
        <div
          className="sp-glow"
          style={{ "--gx": glowX, "--gy": glowY }}
        />
        <div className="sp-grain" />

        {/* Custom cursor dot */}
        <div
          className="sp-cursor"
          style={{ left: `calc(${glowX})`, top: `calc(${glowY})` }}
        />

        {/* Center content */}
        <div className="sp-center">
          <motion.img
            src={logo}
            className="sp-logo"
            alt="Shaurya IT"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
          />

          <motion.p
            className="sp-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            Shaurya IT Services
          </motion.p>

          <motion.h1
            className="sp-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65, ease: [0.22,1,0.36,1] }}
          >
            Engineering<br />
            <span className="sp-accent">Digital</span><br />
            Excellence
          </motion.h1>

          <motion.div
            className="sp-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="sp-dot" />
            <AnimatePresence mode="wait">
              <motion.span
                key={lineIdx}
                className="sp-status-text"
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                {LINES[lineIdx]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="sp-footer">
          <div className="sp-meta">
            <span>v2.0 // SHAURYA_CORP</span>
            <span className="sp-pct">{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="sp-track">
            <motion.div
              className="sp-fill"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
            <div className="sp-shimmer" />
          </div>
        </div>
      </motion.div>
    </>
  );
}