import { Brain, GitBranch, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

/**
 * MethodologyInfinityStrip — ultra-compact marquee
 * - Just the strip (no manual scroll or arrows)
 * - Seamless infinite loop
 * - Titles + numbers + icons preserved
 */

const STEPS = [
  { icon: Brain, title: "Intelligence & Insight" },
  { icon: GitBranch, title: "Strategic Architecture" },
  { icon: Rocket, title: "Launch & Learn" },
  { icon: TrendingUp, title: "Optimize & Scale" },
  { icon: BarChart3, title: "Transparency & Reporting" },
] as const;

export default function MethodologyInfinityStrip() {
  return (
    <section className="relative w-full py-6 md:py-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <Strip />
    </section>
  );
}

function Strip() {
  // duplicate the content twice for a seamless loop
  const items = [...STEPS, ...STEPS, ...STEPS];
  const DURATION = 28; // seconds per full cycle

  return (
    <div className="relative">
      <motion.div
        className="flex gap-3 md:gap-4 will-change-transform"
        aria-label="Methodology steps infinite strip"
        animate={{ x: [0, -1000] }}
        transition={{ duration: DURATION, ease: "linear", repeat: Infinity }}
        style={{ translateX: 0 }}
      >
        {items.map((s, i) => (
          <Pill key={`${s.title}-${i}`} index={i % STEPS.length} icon={s.icon} title={s.title} />)
        )}
      </motion.div>
    </div>
  );
}

function Pill({ index, icon: Icon, title }: { index: number; icon: any; title: string }) {
  const number = (index + 1).toString().padStart(2, "0");
  return (
    <div
      className="shrink-0 inline-flex items-center gap-2 md:gap-2.5 rounded-xl border px-3 md:px-4 py-2 text-xs md:text-sm bg-card/70 backdrop-blur border-border hover:shadow-sm"
    >
      <span className="inline-flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full border border-destructive/60 text-[10px] md:text-[11px] font-semibold text-destructive bg-white/70">
        {number}
      </span>
      <span className="grid place-items-center w-6 h-6 md:w-7 md:h-7 rounded-md bg-destructive/10">
        <Icon className="text-destructive" size={16} strokeWidth={1.6} />
      </span>
      <span className="font-medium whitespace-nowrap">{title}</span>
    </div>
  );
}