import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="navbar glass"
      >
        <div className="logo">
          <img src={logo} width={36} alt="Logo" />
          <span>Shaurya IT</span>
        </div>

        <button className="contact-pill">
          Buy Coffee <Coffee size={18} />
        </button>
      </motion.div>
    </nav>
  );
}
