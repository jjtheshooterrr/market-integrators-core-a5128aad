import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProgressGauge = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 100);
    return () => clearTimeout(timer);
  }, []);

  const radius = 70;
  const strokeWidth = 8;
  const centerX = 100;
  const centerY = 100;
  const startAngle = 180;
  const endAngle = 0;
  const totalAngle = startAngle - endAngle;

  // Calculate arc path for gauge background
  const arcPath = () => {
    const start = (Math.PI * startAngle) / 180;
    const end = (Math.PI * endAngle) / 180;
    const x1 = centerX + radius * Math.cos(start);
    const y1 = centerY + radius * Math.sin(start);
    const x2 = centerX + radius * Math.cos(end);
    const y2 = centerY + radius * Math.sin(end);
    return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`;
  };

  // Calculate needle angle based on progress
  const needleAngle = startAngle - (progress / 100) * totalAngle;
  const needleRad = (Math.PI * needleAngle) / 180;
  const needleLength = radius - 10;
  const needleX = centerX + needleLength * Math.cos(needleRad);
  const needleY = centerY + needleLength * Math.sin(needleRad);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Gauge Background Arc */}
        <path
          d={arcPath()}
          fill="none"
          stroke="hsl(0, 0%, 20%)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Gauge Progress Arc */}
        <motion.path
          d={arcPath()}
          fill="none"
          stroke="hsl(0, 90%, 53%)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ strokeDasharray: "0 1000" }}
          animate={{ strokeDasharray: `${(progress / 100) * 220} 1000` }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />

        {/* Gauge Ticks */}
        {[0, 25, 50, 75, 100].map((tick) => {
          const tickAngle = startAngle - (tick / 100) * totalAngle;
          const tickRad = (Math.PI * tickAngle) / 180;
          const tickStart = radius - 5;
          const tickEnd = radius + 5;
          const x1 = centerX + tickStart * Math.cos(tickRad);
          const y1 = centerY + tickStart * Math.sin(tickRad);
          const x2 = centerX + tickEnd * Math.cos(tickRad);
          const y2 = centerY + tickEnd * Math.sin(tickRad);

          return (
            <line
              key={tick}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(0, 0%, 40%)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}

        {/* Center Pivot */}
        <circle cx={centerX} cy={centerY} r="4" fill="hsl(0, 0%, 30%)" />

        {/* Animated Needle */}
        <motion.line
          x1={centerX}
          y1={centerY}
          x2={needleX}
          y2={needleY}
          stroke="hsl(0, 90%, 53%)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ x2: centerX - needleLength, y2: centerY }}
          animate={{ x2: needleX, y2: needleY }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />

        {/* Center Dot */}
        <circle cx={centerX} cy={centerY} r="6" fill="hsl(0, 90%, 53%)" />

        {/* Labels */}
        <text
          x={centerX - radius + 10}
          y={centerY + 20}
          fill="hsl(0, 0%, 60%)"
          fontSize="12"
          fontWeight="600"
        >
          LOW
        </text>
        <text
          x={centerX + radius - 25}
          y={centerY + 20}
          fill="hsl(0, 0%, 60%)"
          fontSize="12"
          fontWeight="600"
        >
          HIGH
        </text>

        {/* Center Value */}
        <text
          x={centerX}
          y={centerY + 35}
          fill="hsl(0, 90%, 53%)"
          fontSize="20"
          fontWeight="700"
          textAnchor="middle"
        >
          <motion.tspan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {progress}%
          </motion.tspan>
        </text>
        <text
          x={centerX}
          y={centerY + 50}
          fill="hsl(0, 0%, 60%)"
          fontSize="10"
          fontWeight="500"
          textAnchor="middle"
        >
          PERFORMANCE
        </text>
      </svg>
    </div>
  );
};

export default ProgressGauge;
