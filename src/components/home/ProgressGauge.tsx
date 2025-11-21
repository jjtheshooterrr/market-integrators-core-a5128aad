import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProgressGauge = () => {
  const [progress, setProgress] = useState(0); // 0–100 for arc + needle
  const [displayValue, setDisplayValue] = useState(0); // integer for text

  useEffect(() => {
    const target = 100; // fully max out
    const delay = 150; // slight pause after load
    const duration = 1800; // ms

    let frameId: number;
    let startTime: number | null = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateGauge = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);

      const current = eased * target;
      setProgress(current);
      setDisplayValue(Math.round(current));

      if (t < 1) {
        frameId = requestAnimationFrame(animateGauge);
      }
    };

    const timeoutId = window.setTimeout(() => {
      frameId = requestAnimationFrame(animateGauge);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  // ----- Gauge geometry -----
  const centerX = 110;
  const centerY = 110;
  const radius = 70;

  // Needle moves from bottom-left-ish (210°) to full right (360° = 0°)
  const needleStartAngle = 210;
  const needleEndAngle = 360;

  const getNeedlePoint = (value: number) => {
    const clamped = Math.max(0, Math.min(100, value));

    // span is 360 - 210 = 150 degrees
    const angle = needleStartAngle + (clamped / 100) * (needleEndAngle - needleStartAngle);

    const rad = (Math.PI / 180) * angle;
    const needleLength = 68; // closer to arc radius so tip reaches the HIGH notch

    const x = centerX + needleLength * Math.cos(rad);
    const y = centerY + needleLength * Math.sin(rad);

    return { x, y };
  };

  const { x: needleX, y: needleY } = getNeedlePoint(progress);
  const { x: initialNeedleX, y: initialNeedleY } = getNeedlePoint(0);

  const arcPath = `M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`;

  const isMaxed = displayValue >= 99;

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <svg viewBox="0 0 220 180" className="w-[220px] h-[180px] md:w-[260px] md:h-[200px]">
        <defs>
          {/* Gradient for the progress arc */}
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff9800" />
            <stop offset="40%" stopColor="#ff3d00" />
            <stop offset="100%" stopColor="#ff1744" />
          </linearGradient>

          {/* Soft glow behind the arc */}
          <filter id="gaugeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff1744" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Subtle radial highlight behind gauge */}
        <radialGradient id="bgGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
          <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
        </radialGradient>
        <circle cx={centerX} cy={centerY} r={86} fill="url(#bgGlow)" opacity={0.4} />

        {/* Background arc (track) */}
        <path d={arcPath} fill="none" stroke="hsl(0, 0%, 20%)" strokeWidth={11} strokeLinecap="round" />

        {/* Progress arc with gradient + glow */}
        <path
          d={arcPath}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={11}
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${progress} 100`}
          style={{ filter: "url(#gaugeGlow)" }}
        />

        {/* Arc end caps */}
        <circle cx={centerX - radius} cy={centerY} r={3} fill="#6b6b6b" />
        <circle cx={centerX + radius} cy={centerY} r={3} fill="#6b6b6b" />

        {/* LOW / HIGH labels */}
        <text x={centerX - radius + 10} y={centerY + 24} fill="hsl(0, 0%, 70%)" fontSize="11" fontWeight="600">
          LOW
        </text>
        <text x={centerX + radius - 32} y={centerY + 24} fill="hsl(0, 0%, 70%)" fontSize="11" fontWeight="600">
          HIGH
        </text>

        {/* Needle base shadow */}
        <line
          x1={centerX}
          y1={centerY + 1.5}
          x2={needleX}
          y2={needleY + 1.5}
          stroke="rgba(0,0,0,0.5)"
          strokeWidth={4.5}
          strokeLinecap="round"
        />

        {/* Animated needle (position driven by RAF) */}
        <motion.line
          x1={centerX}
          y1={centerY}
          x2={needleX}
          y2={needleY}
          stroke="#ff3d00"
          strokeWidth={4}
          strokeLinecap="round"
          initial={{ x2: initialNeedleX, y2: initialNeedleY }}
          animate={{ x2: needleX, y2: needleY }}
          transition={{ duration: 0.001 }}
        />

        {/* Needle tip */}
        <motion.circle
          cx={needleX}
          cy={needleY}
          r={4}
          fill="#ff6e40"
          initial={{ cx: initialNeedleX, cy: initialNeedleY }}
          animate={{ cx: needleX, cy: needleY }}
          transition={{ duration: 0.001 }}
        />

        {/* Center pivot with subtle pulse at max */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={7}
          fill="#151515"
          stroke="#ff3d00"
          strokeWidth={3}
          animate={isMaxed ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={isMaxed ? { duration: 0.9, repeat: Infinity, repeatDelay: 0.8 } : { duration: 0.2 }}
        />

        {/* Outer pivot ring glow */}
        <circle cx={centerX} cy={centerY} r={12} fill="none" stroke="rgba(255, 61, 0, 0.5)" strokeWidth={2} />

        {/* % value */}
        <motion.text
          x={centerX}
          y={centerY + 42}
          fill="#ff3d00"
          fontSize="22"
          fontWeight="800"
          textAnchor="middle"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <tspan>{displayValue}%</tspan>
        </motion.text>

        {/* PERFORMANCE label */}
        <motion.text
          x={centerX}
          y={centerY + 58}
          fill="hsl(0, 0%, 75%)"
          fontSize="10"
          fontWeight="500"
          textAnchor="middle"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          PERFORMANCE
        </motion.text>

        {/* Decorative brackets under PERFORMANCE */}
        <line
          x1={centerX - 20}
          y1={centerY + 60}
          x2={centerX - 28}
          y2={centerY + 68}
          stroke="hsl(0, 0%, 55%)"
          strokeWidth={1.4}
          strokeLinecap="round"
        />
        <line
          x1={centerX + 20}
          y1={centerY + 60}
          x2={centerX + 28}
          y2={centerY + 68}
          stroke="hsl(0, 0%, 55%)"
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ProgressGauge;
