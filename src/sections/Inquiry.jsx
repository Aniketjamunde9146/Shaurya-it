import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Globe,
  ShieldCheck,
  Zap,
  CircleUserRound
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Inquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8qeoy9j",
        "template_v65jwmh",
        {
          name: form.name,
          email: form.email,
          number: form.number,
          message: form.message
        },
        "cKeqcDMZZ3kjjc1C-"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setForm({ name: "", email: "", number: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <motion.section
    id="inquiry-section-v2"
      className="inquiry-section-v2"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* HEADER */}
      <motion.div
        className="inquiry-header-v2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="process-status-tag glass">
          <div className="red-dot" /> OPEN FOR PROJECTS
        </div>

        <h2 className="hero-title2">
          Let&apos;s build something{" "}
          <span className="gradient-text">Legendary</span>
        </h2>
      </motion.div>

      <div className="inquiry-grid-v2">
        {/* SIDEBAR */}
        <motion.div
          className="inquiry-sidebar"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="sidebar-card glass">
            <div className="sidebar-icon-box">
              <Zap size={20} />
            </div>
            <div>
              <h4>Fast Response</h4>
              <p>Expect a detailed response within 24 hours.</p>
            </div>
          </div>

          <div className="sidebar-card glass">
            <div className="sidebar-icon-box">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4>Secure & Private</h4>
              <p>Your project details are kept confidential.</p>
            </div>
          </div>

          <div className="contact-methods glass">
            <div className="contact-item">
              <Mail size={16} className="cyan-text" />
              <span>aniketjamunde4@gmail.com</span>
            </div>
            <div className="contact-item">
              <CircleUserRound size={16} className="cyan-text" />
              <span>+91 9146293702</span>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          className="form-container-v2 glass"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {success ? (
            <motion.div
              className="success-message"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h3>Inquiry Sent Successfully 🚀</h3>
              <p>We’ll contact you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="input-group-row">
                <div className="input-box">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder=" "
                    value={form.name}
                    onChange={handleChange}
                  />
                  <label>Full Name</label>
                </div>

                <div className="input-box">
                  <input
                    type="tel"
                    name="number"
                    required
                    placeholder=" "
                    value={form.number}
                    onChange={handleChange}
                  />
                  <label>Contact Number</label>
                </div>

                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder=" "
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label>Email Address</label>
                </div>
              </div>

              <div className="input-box">
                <textarea
                  name="message"
                  required
                  placeholder=" "
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                />
                <label>How can we help you?</label>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="submit-btn-v2"
                disabled={loading}
              >
                <span>{loading ? "Sending..." : "Initialize Project"}</span>
                <Send size={18} />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
