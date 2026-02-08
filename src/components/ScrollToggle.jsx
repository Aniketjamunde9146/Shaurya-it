import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function ScrollToggle() {
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowDown(window.scrollY < window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const target = showDown ? "inquiry-section-v2" : "hero";
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      className="scroll-toggle glass"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {showDown ? <ArrowDown size={18} /> : <ArrowUp size={18} />}
    </motion.button>
  );
}
