import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProgressGauge = () => {
  const target = 100; // <-- needle maxes out now
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(target), 150);
    return () => clearTimeout(timer);
  }, [target]);

  // Geometry
  const centerX = 110;
  const centerY = 110;
  const radius = 70;

  // Needle from bottom-left → bottom-right
  const needleStartAngle = 225;
  const needleEndAngle = 315;

  const getNeedlePoint = (value: number) => {
    const clamped = Math.max(0, Math.min(100, value));
    const angle = needleStartAngle + (clamped / 100) * (needleEndAngle - needleStartAngle);
    const rad = (Math.PI / 180) * angle;
    const needleLength = 55;
    const x = centerX + needleLength * Math.cos(rad);
    const y = centerY + needleLength * Math.sin(rad);
    return { x, y };
  };

  const { x: needleX, y: needleY } = getNeedlePoint(progress);
  const { x: initialNeedleX, y: initialNeedleY } = getNeedlePoint(0);

  // Top arc
  const arcPath = `M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`;

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <svg viewBox="0 0 220 170" className="w-[220px] h-[170px] md:w-[260px] md:h-[190px]">
        {/* Background arc */}
        <path d={arcPath} fill="none" stroke="hsl(0, 0%, 25%)" strokeWidth={10} strokeLinecap="round" />

        {/* Progress arc */}
        <motion.path
          d={arcPath}
          fill="none"
          stroke="hsl(0, 90%, 55%)"
          strokeWidth={10}
          strokeLinecap="round"
          pathLength={100}
          initial={{ strokeDasharray: "0 100" }}
          animate={{ strokeDasharray: `${progress} 100` }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        />

        {/* End caps */}
        <circle cx={centerX - radius} cy={centerY} r={3} fill="hsl(0, 0%, 40%)" />
        <circle cx={centerX + radius} cy={centerY} r={3} fill="hsl(0, 0%, 40%)" />

        {/* LOW/HIGH labels */}
        <text x={centerX - radius + 8} y={centerY + 22} fill="hsl(0, 0%, 65%)" fontSize="11" fontWeight="600">
          LOW
        </text>
        <text x={centerX + radius - 30} y={centerY + 22} fill="hsl(0, 0%, 65%)" fontSize="11" fontWeight="600">
          HIGH
        </text>

        {/* Needle */}
        <motion.line
          x1={centerX}
          y1={centerY}
          x2={needleX}
          y2={needleY}
          stroke="hsl(0, 90%, 55%)"
          strokeWidth={4}
          strokeLinecap="round"
          initial={{ x2: initialNeedleX, y2: initialNeedleY }}
          animate={{ x2: needleX, y2: needleY }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        />

        {/* Needle head */}
        <motion.circle
          cx={needleX}
          cy={needleY}
          r={4}
          fill="hsl(0, 90%, 60%)"
          initial={{ cx: initialNeedleX, cy: initialNeedleY }}
          animate={{ cx: needleX, cy: needleY }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        />

        {/* Center pivot */}
        <circle cx={centerX} cy={centerY} r={7} fill="hsl(0, 0%, 18%)" />
        <circle cx={centerX} cy={centerY} r={12} fill="none" stroke="hsl(0, 90%, 55%)" strokeWidth={3} />

        {/* Number */}
        <text x={centerX} y={centerY + 40} fill="hsl(0, 90%, 55%)" fontSize="20" fontWeight="700" textAnchor="middle">
          <motion.tspan
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            {target}%
          </motion.tspan>
        </text>

        {/* PERFORMANCE label */}
        <text x={centerX} y={centerY + 55} fill="hsl(0, 0%, 70%)" fontSize="10" fontWeight="500" textAnchor="middle">
          PERFORMANCE
        </text>

        {/* Decorative brackets */}
        <line
          x1={centerX - 18}
          y1={centerY + 58}
          x2={centerX - 26}
          y2={centerY + 66}
          stroke="hsl(0, 0%, 45%)"
          strokeWidth={1.4}
          strokeLinecap="round"
        />
        <line
          x1={centerX + 18}
          y1={centerY + 58}
          x2={centerX + 26}
          y2={centerY + 66}
          stroke="hsl(0, 0%, 45%)"
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ProgressGauge;
