import { motion } from "framer-motion";
import { useState } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
}

const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchVariants = {
    normal: { x: 0, y: 0, opacity: 1 },
    glitch1: { x: -2, y: -2, opacity: 0.8 },
    glitch2: { x: 2, y: 2, opacity: 0.8 },
  };

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <motion.span
        className="relative z-10"
        animate={isGlitching ? "glitch1" : "normal"}
        variants={glitchVariants}
        transition={{ duration: 0.1, repeat: isGlitching ? Infinity : 0, repeatType: "mirror" }}
      >
        {children}
      </motion.span>
      
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-primary mix-blend-screen"
            animate="glitch1"
            variants={glitchVariants}
            transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-cyan-500 mix-blend-screen"
            animate="glitch2"
            variants={glitchVariants}
            transition={{ duration: 0.12, repeat: Infinity, repeatType: "mirror" }}
          >
            {children}
          </motion.span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
