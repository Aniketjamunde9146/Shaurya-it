import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function ScrollToggle() {
  const [showDown, setShowDown] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 80);
      setShowDown(scrolled < window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const target = showDown ? "inquiry-section-v2" : "hero";
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .scroll-toggle-btn {
          position: fixed;
          right: 24px;
          bottom: 100px;
          z-index: 300;
          width: 40px; height: 40px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(8,14,26,0.85);
          backdrop-filter: blur(14px);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #2d4155;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          transition: border-color 0.25s, color 0.25s;
        }
        .scroll-toggle-btn:hover {
          border-color: rgba(99,212,255,0.3);
          color: #63d4ff;
          box-shadow: 0 4px 24px rgba(99,212,255,0.15);
        }
        @media (max-width: 768px) {
          .scroll-toggle-btn { right: 16px; bottom: 110px; }
        }
      `}</style>

      <AnimatePresence>
        {visible && (
          <motion.button
            className="scroll-toggle-btn"
            onClick={handleClick}
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            aria-label={showDown ? "Scroll to contact" : "Scroll to top"}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={showDown ? "down" : "up"}
                initial={{ opacity: 0, y: showDown ? -6 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: showDown ? 6 : -6 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                {showDown ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}