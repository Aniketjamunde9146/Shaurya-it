import React from "react";
import { motion } from "framer-motion";
import {
  House,
  Code2,
  SquareUserRound,
  MessageCircle
} from "lucide-react";

function DockIcon({ icon, label }) {
  return (
    <motion.div
      className="dock-item"
      whileHover={{ y: -14, scale: 1.4 }}
    >
      <div className="icon-circle">{icon}</div>
      <span className="tooltip">{label}</span>
    </motion.div>
  );
}

export default function Dock() {
  return (
    <motion.div
      className="dock-wrapper"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.nav className="dock glass">
        <DockIcon icon={<House size={20} />} label="Home" />
        <DockIcon icon={<Code2 size={20} />} label="Dev" />
        <DockIcon icon={<SquareUserRound size={20} />} label="About" />
        <DockIcon icon={<MessageCircle size={20} />} label="Contact" />
      </motion.nav>
    </motion.div>
  );
}
