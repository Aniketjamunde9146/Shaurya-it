import { motion } from "framer-motion";
import { FaTeamspeak } from "react-icons/fa";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";

export default function Navbar({ onContactClick }) {
  return (
    <nav className="nav-container">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="navbar glass"
      >
        <div className="logo">
          <img src={logo} width={36} alt="Shaurya IT Logo" />
          <span>Shaurya IT</span>
        </div>

        <button
          type="button"
          className="contact-pill"
          onClick={onContactClick}
        >
          Let&apos;s Talk <FaTeamspeak size={18} />
        </button>
      </motion.div>
    </nav>
  );
}

Navbar.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};
