import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, ShieldCheck, Zap, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const projectTypes = ["Web App", "Mobile App", "Full Stack", "UI/UX Design", "Other"];

export default function Inquiry() {
  const [form, setForm] = useState({ name: "", email: "", number: "", type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_8qeoy9j", "template_v65jwmh", { ...form }, "cKeqcDMZZ3kjjc1C-")
      .then(() => { setSuccess(true); setLoading(false); setForm({ name: "", email: "", number: "", type: "", message: "" }); })
      .catch((err) => { console.error(err); setLoading(false); alert("Something went wrong. Please try again."); });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .inquiry-section {
          position: relative;
          background: #04070f;
          padding: 100px 6vw 120px;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          color: #e2e8f0;
        }
        .inquiry-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 55% 40% at 10% 30%, rgba(99,212,255,0.06), transparent 65%),
            radial-gradient(ellipse 50% 40% at 90% 70%, rgba(168,85,247,0.06), transparent 65%);
          pointer-events: none;
        }
        .inq-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black, transparent);
          pointer-events: none;
        }

        /* HEADER */
        .inq-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 72px;
          position: relative;
          z-index: 2;
        }
        .inq-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(0,255,157,0.2);
          border-radius: 999px;
          padding: 5px 16px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #00ff9d;
          background: rgba(0,255,157,0.05);
          margin-bottom: 24px;
        }
        .inq-kicker-dot { width: 6px; height: 6px; border-radius: 50%; background: #00ff9d; box-shadow: 0 0 6px #00ff9d; animation: blink 2s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        .inq-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6.5vw, 5.5rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #f0f6ff;
          margin-bottom: 18px;
        }
        .inq-title-accent {
          background: linear-gradient(110deg, #63d4ff 0%, #a855f7 55%, #00ff9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .inq-subtitle { font-size: 0.93rem; font-weight: 300; color: #3d5470; line-height: 1.75; }

        /* LAYOUT */
        .inq-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          align-items: start;
        }

        /* SIDEBAR */
        .inq-sidebar {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .sidebar-feature {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.25s;
        }
        .sidebar-feature:hover { border-color: rgba(99,212,255,0.15); }
        .sf-icon {
          width: 36px; height: 36px;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: var(--sfc, #63d4ff);
          background: color-mix(in srgb, var(--sfc, #63d4ff) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--sfc, #63d4ff) 18%, transparent);
        }
        .sf-text h4 { font-size: 0.82rem; font-weight: 600; color: #94a3b8; margin-bottom: 3px; }
        .sf-text p { font-size: 0.72rem; font-weight: 300; color: #2d4155; line-height: 1.5; }

        .contact-info-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ci-label { font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: #1e3248; margin-bottom: 2px; }
        .ci-item { display: flex; align-items: center; gap: 10px; font-size: 0.78rem; color: #3d5470; }
        .ci-item svg { color: #63d4ff; flex-shrink: 0; }

        /* FORM CARD */
        .form-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 22px;
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
        }
        .form-card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,212,255,0.3), rgba(168,85,247,0.3), transparent);
        }

        /* Project type pills */
        .type-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .type-pill {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px;
          padding: 6px 16px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          color: #2d4155;
          background: transparent;
          cursor: pointer;
          transition: all 0.22s;
        }
        .type-pill:hover { color: #64748b; border-color: rgba(255,255,255,0.14); }
        .type-pill.selected { background: rgba(99,212,255,0.08); border-color: rgba(99,212,255,0.3); color: #63d4ff; }

        /* Inputs */
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
        .input-wrap { position: relative; }
        .input-wrap label {
          display: block;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2d4155;
          margin-bottom: 7px;
          transition: color 0.2s;
        }
        .input-wrap.focused label { color: #63d4ff; }
        .input-wrap input,
        .input-wrap textarea {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 11px;
          padding: 12px 16px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          color: #e2e8f0;
          outline: none;
          transition: border-color 0.25s, background 0.25s;
          resize: none;
          box-sizing: border-box;
        }
        .input-wrap input::placeholder,
        .input-wrap textarea::placeholder { color: #1e3248; }
        .input-wrap input:focus,
        .input-wrap textarea:focus {
          border-color: rgba(99,212,255,0.35);
          background: rgba(99,212,255,0.03);
        }
        .input-full { margin-bottom: 14px; }
        .textarea-wrap { margin-bottom: 24px; }
        .textarea-wrap textarea { min-height: 110px; }

        /* Submit */
        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #63d4ff 0%, #7c3aed 100%);
          border: none;
          border-radius: 12px;
          padding: 15px 28px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, opacity 0.3s;
          letter-spacing: 0.02em;
        }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .submit-btn:not(:disabled):hover { box-shadow: 0 0 40px rgba(99,212,255,0.3), 0 8px 30px rgba(124,58,237,0.25); }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .submit-btn:hover::before { opacity: 1; }

        /* Success */
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 60px 0;
          text-align: center;
        }
        .success-icon { color: #00ff9d; filter: drop-shadow(0 0 14px rgba(0,255,157,0.5)); }
        .success-state h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.04em;
          color: #f0f6ff;
        }
        .success-state p { font-size: 0.85rem; color: #3d5470; font-weight: 300; }

        @media (max-width: 860px) {
          .inq-layout { grid-template-columns: 1fr; }
          .inq-sidebar { flex-direction: row; flex-wrap: wrap; }
          .sidebar-feature, .contact-info-card { flex: 1; min-width: 200px; }
        }
        @media (max-width: 560px) {
          .inquiry-section { padding: 70px 5vw 90px; }
          .form-row { grid-template-columns: 1fr; }
          .form-card { padding: 24px 20px; }
        }
      `}</style>

      <section id="inquiry-section-v2" className="inquiry-section">
        <div className="inq-bg-grid" />

        {/* HEADER */}
        <motion.div className="inq-header" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
          <div className="inq-kicker"><span className="inq-kicker-dot" />Open For Projects</div>
          <h2 className="inq-title">Let's Build Something<br /><span className="inq-title-accent">Legendary</span></h2>
          <p className="inq-subtitle">Tell us about your project and we'll get back within 24 hours with a detailed plan.</p>
        </motion.div>

        <div className="inq-layout">
          {/* SIDEBAR */}
          <motion.div className="inq-sidebar" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }}>
            <div className="sidebar-feature" style={{ "--sfc": "#63d4ff" }}>
              <div className="sf-icon"><Zap size={17} /></div>
              <div className="sf-text"><h4>Fast Response</h4><p>Detailed reply within 24 hours, always.</p></div>
            </div>
            <div className="sidebar-feature" style={{ "--sfc": "#a855f7" }}>
              <div className="sf-icon"><ShieldCheck size={17} /></div>
              <div className="sf-text"><h4>Fully Confidential</h4><p>Your project details stay strictly private.</p></div>
            </div>
            <div className="contact-info-card">
              <div className="ci-label">Direct Contact</div>
              <div className="ci-item"><Mail size={13} /><span>aniketjamunde4@gmail.com</span></div>
              <div className="ci-item"><Phone size={13} /><span>+91 9146293702</span></div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div className="form-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div key="success" className="success-state" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                  <CheckCircle2 size={52} className="success-icon" />
                  <h3>Inquiry Sent 🚀</h3>
                  <p>We'll reach out shortly with a tailored plan.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {/* Project Type */}
                  <div className="type-row">
                    {projectTypes.map(t => (
                      <button key={t} type="button" className={`type-pill ${form.type === t ? "selected" : ""}`} onClick={() => setForm({ ...form, type: t })}>{t}</button>
                    ))}
                  </div>

                  <div className="form-row">
                    <div className={`input-wrap ${focused === "name" ? "focused" : ""}`}>
                      <label>Full Name</label>
                      <input type="text" name="name" required placeholder="John Smith" value={form.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                    </div>
                    <div className={`input-wrap ${focused === "number" ? "focused" : ""}`}>
                      <label>Phone Number</label>
                      <input type="tel" name="number" required placeholder="+91 00000 00000" value={form.number} onChange={handleChange} onFocus={() => setFocused("number")} onBlur={() => setFocused(null)} />
                    </div>
                  </div>

                  <div className={`input-wrap input-full ${focused === "email" ? "focused" : ""}`}>
                    <label>Email Address</label>
                    <input type="email" name="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                  </div>

                  <div className={`input-wrap textarea-wrap ${focused === "message" ? "focused" : ""}`}>
                    <label>Tell Us About Your Project</label>
                    <textarea name="message" required placeholder="Describe your idea, goals, and timeline..." value={form.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
                  </div>

                  <motion.button type="submit" className="submit-btn" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <span>{loading ? "Sending..." : "Initialize Project"}</span>
                    <Send size={16} />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}