import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, Instagram, Send, ChevronDown, CheckCircle2, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const services = ["Web Development", "App Development", "UI/UX Design", "Full Stack", "AI Integration"];

export default function PopUp({ isOpen, onClose }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "" });

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const msg = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}`;
    window.open(`https://wa.me/919146293702?text=${msg}`, "_blank");
    setLoading(false);
    setSent(true);
    setTimeout(() => { onClose(); setSent(false); setForm({ name: "", phone: "", email: "", service: "" }); }, 2800);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .popup-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }
        .popup-card {
          background: #080e1a;
          border: 1px solid rgba(255,255,255,0.08);
          border-top: 2px solid #63d4ff;
          border-radius: 24px;
          width: 100%;
          max-width: 420px;
          padding: 32px 28px 24px;
          position: relative;
          font-family: 'Outfit', sans-serif;
          color: #e2e8f0;
        }
        /* Ambient glow */
        .popup-card::before {
          content: '';
          position: absolute;
          top: -1px; left: 10%; right: 10%;
          height: 60px;
          background: radial-gradient(ellipse at 50% 0%, rgba(99,212,255,0.12), transparent 70%);
          pointer-events: none;
          border-radius: inherit;
        }
        .popup-close {
          position: absolute;
          top: 16px; right: 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50%;
          width: 30px; height: 30px;
          display: flex; align-items: center; justify-content: center;
          color: #3d5470;
          cursor: pointer;
          transition: all 0.2s;
        }
        .popup-close:hover { color: #e2e8f0; background: rgba(255,255,255,0.1); }

        .popup-kicker {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #63d4ff;
          margin-bottom: 8px;
        }
        .popup-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.04em;
          color: #f0f6ff;
          line-height: 1;
          margin-bottom: 24px;
        }

        /* Fields */
        .popup-field {
          position: relative;
          margin-bottom: 12px;
        }
        .popup-label {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2d4155;
          margin-bottom: 6px;
          transition: color 0.2s;
        }
        .popup-field.focused .popup-label { color: #63d4ff; }
        .popup-field input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 11px 14px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          color: #e2e8f0;
          outline: none;
          transition: border-color 0.25s, background 0.25s;
          box-sizing: border-box;
        }
        .popup-field input::placeholder { color: #1e3248; }
        .popup-field input:focus { border-color: rgba(99,212,255,0.35); background: rgba(99,212,255,0.03); }

        .popup-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        /* Custom select */
        .popup-select-wrap { position: relative; margin-bottom: 16px; }
        .popup-select-trigger {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 11px 14px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          color: #1e3248;
          display: flex; align-items: center; justify-content: space-between;
          cursor: pointer;
          transition: border-color 0.25s;
          user-select: none;
        }
        .popup-select-trigger.selected { color: #e2e8f0; }
        .popup-select-trigger:hover,
        .popup-select-trigger.open { border-color: rgba(99,212,255,0.3); }
        .popup-select-opts {
          position: absolute;
          top: calc(100% + 6px); left: 0; right: 0;
          background: #0a1020;
          border: 1px solid rgba(99,212,255,0.2);
          border-radius: 12px;
          overflow: hidden;
          z-index: 10;
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
        }
        .popup-opt {
          padding: 11px 14px;
          font-size: 0.82rem;
          color: #3d5470;
          cursor: pointer;
          transition: all 0.18s;
          font-family: 'Outfit', sans-serif;
        }
        .popup-opt:hover { background: rgba(99,212,255,0.07); color: #63d4ff; }
        .popup-opt.active { color: #63d4ff; background: rgba(99,212,255,0.05); }

        /* Submit */
        .popup-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #63d4ff 0%, #7c3aed 100%);
          border: none;
          border-radius: 12px;
          padding: 13px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: box-shadow 0.3s, opacity 0.2s;
          margin-bottom: 18px;
          position: relative;
          overflow: hidden;
        }
        .popup-submit::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .popup-submit:hover::before { opacity: 1; }
        .popup-submit:hover { box-shadow: 0 0 30px rgba(99,212,255,0.3); }
        .popup-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        /* Social row */
        .popup-socials {
          display: flex;
          justify-content: center;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .popup-social {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          color: #2d4155;
          text-decoration: none;
          transition: all 0.22s;
        }
        .popup-social:hover { border-color: rgba(99,212,255,0.3); color: #63d4ff; background: rgba(99,212,255,0.07); transform: translateY(-3px); }
        .popup-social.wa { background: rgba(37,211,102,0.08); border-color: rgba(37,211,102,0.2); color: #25d366; }
        .popup-social.wa:hover { background: rgba(37,211,102,0.14); border-color: rgba(37,211,102,0.4); }

        /* Success */
        .popup-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 40px 0;
          text-align: center;
        }
        .popup-success-icon { color: #00ff9d; filter: drop-shadow(0 0 16px rgba(0,255,157,0.5)); }
        .popup-success h3 { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; letter-spacing: 0.04em; color: #f0f6ff; }
        .popup-success p { font-size: 0.82rem; color: #3d5470; font-weight: 300; }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="popup-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
            <motion.div className="popup-card" initial={{ scale: 0.88, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.88, opacity: 0, y: 30 }} transition={{ type: "spring", damping: 22, stiffness: 280 }} onClick={e => e.stopPropagation()}>
              <button className="popup-close" onClick={onClose}><X size={13} /></button>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="success" className="popup-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                    <CheckCircle2 size={52} className="popup-success-icon" />
                    <h3>Message Sent!</h3>
                    <p>Opening WhatsApp — we'll reply shortly.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="popup-kicker">New Project Inquiry</p>
                    <h3 className="popup-title">Start Your Project</h3>

                    <form onSubmit={handleSubmit}>
                      <div className={`popup-field ${focused === "name" ? "focused" : ""}`}>
                        <label className="popup-label">Full Name</label>
                        <input required placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                      </div>

                      <div className="popup-row">
                        <div className={`popup-field ${focused === "phone" ? "focused" : ""}`}>
                          <label className="popup-label">Phone</label>
                          <input required placeholder="+91 00000 00000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} />
                        </div>
                        <div className={`popup-field ${focused === "email" ? "focused" : ""}`}>
                          <label className="popup-label">Email</label>
                          <input type="email" required placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                        </div>
                      </div>

                      {/* Custom Select */}
                      <div className="popup-select-wrap">
                        <div className={`popup-select-trigger ${form.service ? "selected" : ""} ${selectOpen ? "open" : ""}`} onClick={() => setSelectOpen(o => !o)}>
                          <span>{form.service || "Choose Service"}</span>
                          <motion.span animate={{ rotate: selectOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                            <ChevronDown size={14} />
                          </motion.span>
                        </div>
                        <AnimatePresence>
                          {selectOpen && (
                            <motion.div className="popup-select-opts" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                              {services.map(s => (
                                <div key={s} className={`popup-opt ${form.service === s ? "active" : ""}`} onClick={() => { setForm({ ...form, service: s }); setSelectOpen(false); }}>{s}</div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <motion.button type="submit" className="popup-submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                        {loading ? "Sending..." : "Send via WhatsApp"} <Send size={14} />
                      </motion.button>
                    </form>

                    <div className="popup-socials">
                      <a href="tel:+919146293702" className="popup-social" aria-label="Call"><Phone size={15} /></a>
                      <a href="https://wa.me/919146293702" target="_blank" rel="noreferrer" className="popup-social wa" aria-label="WhatsApp"><MessageSquare size={15} /></a>
                      <a href="https://instagram.com/aniket_jamunde_002" target="_blank" rel="noreferrer" className="popup-social" aria-label="Instagram"><Instagram size={15} /></a>
                      <a href="mailto:aniketjamunde4@gmail.com" className="popup-social" aria-label="Email"><Mail size={15} /></a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}