import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSize = useMotionValue(20);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorSizeSpring = useSpring(cursorSize, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        cursorSize.set(50);
      } else {
        cursorSize.set(20);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, cursorSize]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: cursorSizeSpring,
          height: cursorSizeSpring,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-primary bg-primary/30 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
      </motion.div>
      
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
