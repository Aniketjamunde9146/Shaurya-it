import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Splash() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 4, 100));
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="splash-full"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="splash-center">
        <motion.img
          src={logo}
          className="splash-logo-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="splash-title-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          WELCOME TO <br />
          <span className="gradient-text">SHAURYA IT SERVICES</span>
        </motion.h1>

        <p className="splash-sub-full">
          Preparing premium digital experience…
        </p>
      </div>

      <div className="splash-footer">
        <div className="premium-progress">
          <motion.div
            className="premium-progress-fill"
            animate={{ width: `${progress}%` }}
          />
          <div className="premium-progress-glow" />
        </div>
      </div>
    </motion.section>
  );
}
