import React from "react";
import { motion } from "framer-motion";
import "../App.css";

export default function OurTeam() {
  return (
    <section className="team-only" id="team">
      
      {/* SECTION HEADING */}
      <motion.div
        className="team-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="team-title">
          Meet Our <span className="gradient-text">Team</span>
        </h2>
        <p className="team-subtitle">
          The people behind our high-performance web & app solutions
        </p>
      </motion.div>

      {/* PERSON 1 */}
      <motion.div
        className="person-card glass"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="person-photo">
          <img src="/founder.jpg" alt="Aniket Jamunde" />
        </div>

        <div className="person-info">
          <h3>Aniket Jamunde</h3>
          <span>Founder & Full-Stack Developer</span>
          <p>
            I design and develop premium web and mobile applications with
            an Apple-inspired UI, focusing on performance, scalability,
            and clean user experience.
          </p>
        </div>
      </motion.div>

      {/* PERSON 2 */}
      <motion.div
        className="person-card glass"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="person-photo">
          <img src="/cofounder.png" alt="Co-Founder" />
        </div>

        <div className="person-info">
           <h3>Priti Surase</h3>
          Co-Founder
          <span>Co-Founder &
UI / UX Designer</span>
          <p>
            I craft modern, intuitive interfaces and user journeys that
            feel smooth, minimal, and aligned with iOS & macOS design
            standards.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
