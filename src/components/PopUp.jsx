import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, Instagram, Send, ChevronDown, CheckCircle2, MessageSquare } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function PopUp({ isOpen, onClose }) {
  const [sent, setSent] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Choose Service" });

  const services = ["Web Development", "App Development", "UI/UX Design", "Marketing"];

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}`;
    window.open(`https://wa.me/919146293702?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => {
      onClose();
      setSent(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="popup premium-glass"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {!sent ? (
              <>
                <div className="popup-header">
                  <div>
                    <h3>Start Your Project</h3>
                    <p className="subtitle">Let&apos;s build something extraordinary</p>
                  </div>
                  <button className="close-pill" onClick={onClose}><X size={16} /></button>
                </div>

                <form className="popup-form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input required placeholder="Your Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>

                  <div className="form-row">
                    <input required placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} /> <br />
                    <input type="email" required placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>

                  {/* CUSTOM SELECT */}
                  <div className="custom-select-container">
                    <div className="custom-select-trigger" onClick={() => setIsSelectOpen(!isSelectOpen)}>
                      <span>{form.service}</span>
                      <ChevronDown size={16} className={isSelectOpen ? "rotate" : ""} />
                    </div>
                    <AnimatePresence>
                      {isSelectOpen && (
                        <motion.div 
                          className="custom-options glass-blur"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 5 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {services.map((s) => (
                            <div key={s} className="option-item" onClick={() => { setForm({...form, service: s}); setIsSelectOpen(false); }}>
                              {s}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="submit-btn-premium"
                  >
                    Send Inquiry <Send size={16} />
                  </motion.button>
                </form>

              <div className="popup-footer">
  {/* CALL */}
  <a
    href="tel:+919146293702"
    className="footer-pill"
    aria-label="Call"
  >
    <Phone size={18} />
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/919146293702"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-pill wa"
    aria-label="WhatsApp"
  >
    <MessageSquare size={18} />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/aniket_jamunde_002"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-pill"
    aria-label="Instagram"
  >
    <Instagram size={18} />
  </a>

  {/* EMAIL */}
  <a
    href="mailto:aniketjamunde4@gmail.com"
    className="footer-pill"
    aria-label="Email"
  >
    <Mail size={18} />
  </a>
</div>

              </>
            ) : (
              <motion.div className="success-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="success-icon-wrap">
                    <CheckCircle2 size={48} color="#10b981" />
                </div>
                <h3>Message Sent</h3>
                <p>Redirecting you to WhatsApp...</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}