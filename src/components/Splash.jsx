import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Splash() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Technical loading simulation
    const interval = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 2 : 100));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="splash-full"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      {/* Reusing the grid for continuity during entry */}
      <div className="grid-background" style={{ opacity: 0.4 }} />

      <div className="splash-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} className="splash-logo-full" alt="Shaurya IT Logo" />
        </motion.div>

        <motion.h1
          className="splash-title-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ENGINEERING <br />
          <span className="gradient-text">DIGITAL EXCELLENCE</span>
        </motion.h1>

        <motion.div 
          className="splash-status-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="red-dot"></span>
          <p className="splash-sub-full">
            INITIALIZING SYSTEMS: {progress}%
          </p>
        </motion.div>
      </div>

      <div className="splash-footer">
        <div className="premium-progress">
          <motion.div
            className="premium-progress-fill"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
          <div className="premium-progress-glow" />
        </div>
        <p className="splash-version">v2.0.26 // SHAURYA_CORP</p>
      </div>
    </motion.section>
  );
}