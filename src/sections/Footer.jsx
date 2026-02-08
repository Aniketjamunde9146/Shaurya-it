import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram
} from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="footer-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="footer-glow" />

      <div className="footer-container glass">
        {/* BRAND */}
        <div className="footer-brand">
          <h3 className="footer-logo">
            Shaurya <span className="gradient-text">IT Services</span>
          </h3>
          <p className="footer-tagline">
            Building reliable web & mobile solutions with performance,
            clarity, and long-term value.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Navigation</h4>
          <a href="#hero">Home</a>
          <a href="#services-section">Services</a>
          <a href="#projects-section">Project</a>
          <a href="#inquiry-section-v2">Inquiry</a>
          <a href="#process-section-premium">Process</a>
          <a href="#tech-section">Tech</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="footer-item">
            <Mail size={14} />
            <span>aniketjamunde4@gmail.com</span>
          </div>
          <div className="footer-item">
            <Phone size={14} />
            <span>+91 9146293702</span>
          </div>
          <div className="footer-item">
            <Globe size={14} />
            <span>Remote Worldwide</span>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://github.com/Aniketjamunde9146/" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://in.linkedin.com/in/aniket-jamunde-37203b386" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://instagram.com/aniket_jamunde_002" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Shaurya IT Services</span>
        <a href="#top" className="back-top">
          Back to top <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.footer>
  );
}
