import { Brain, GitBranch, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * MethodologyFlow (redesigned orbit version)
 *
 * Mobile: swipeable cards with snap.
 * Desktop: circular "orbit" layout with a reactive center and five spokes.
 */

const STEPS = [
  { icon: Brain, title: "Intelligence & Insight", desc: "Deep-dive analysis into your data, market trends, and customer signals." },
  { icon: GitBranch, title: "Strategic Architecture", desc: "Build your marketing system like an engineer: structure, flow, and performance built in." },
  { icon: Rocket, title: "Launch & Learn", desc: "Deploy, test, and iterate — every week, every channel, every audience." },
  { icon: TrendingUp, title: "Optimize & Scale", desc: "Continuous performance tuning powered by machine learning and predictive modeling." },
  { icon: BarChart3, title: "Transparency & Reporting", desc: "Access real metrics in real time through your analytics dashboard." },
] as const;

export default function MethodologyFlow() {
  return (
    <section className="w-full overflow-x-hidden">
      <header className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-2xl md:text-5xl font-extrabold tracking-tight"
        >
          Our Methodology
        </motion.h2>
        <p className="mt-2 md:mt-3 text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
          A continuous orbit—from intelligence to impact—built to loop, learn, and scale.
        </p>
      </header>

      {/* Mobile: horizontal cards */}
      <div className="md:hidden mt-6">
        <div className="relative h-1.5 bg-border/40 mx-4 rounded-full overflow-hidden">
          {/* simple animated bar */}
          <motion.div initial={{ width: "20%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full bg-destructive" />
        </div>
        <div className="mt-5 flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-none" role="list" aria-label="Methodology steps">
          {STEPS.map((s, i) => (
            <MobileCard key={s.title} index={i} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>

      {/* Desktop: Orbit */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-6 py-16 grid place-items-center">
          <Orbit />
        </div>
      </div>
    </section>
  );
}

function MobileCard({ index, icon: Icon, title, desc }: { index: number; icon: any; title: string; desc: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <motion.article
      ref={ref}
      role="listitem"
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35 }}
      className="snap-center shrink-0 w-[86%] max-w-[360px] rounded-2xl border border-border/60 bg-card/80 backdrop-blur p-5 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-destructive/70 text-[11px] font-semibold text-destructive">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <Icon className="text-destructive" size={18} strokeWidth={1.6} />
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </motion.article>
  );
}

/* ================= Orbit (Desktop) ================= */
function Orbit() {
  // positions for 5 nodes around a circle (degrees: -90, -18, 54, 126, 198)
  const nodes = [
    { angle: -90, i: 0 },
    { angle: -18, i: 1 },
    { angle: 54, i: 2 },
    { angle: 126, i: 3 },
    { angle: 198, i: 4 },
  ];

  return (
    <div className="relative w-[820px] h-[820px] max-w-full">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-border/60" />
      {/* middle ring */}
      <div className="absolute inset-10 rounded-full border border-border/40" />
      {/* inner ring */}
      <div className="absolute inset-20 rounded-full border border-border/30" />

      {/* Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] max-w-[70%] rounded-2xl border border-border/60 bg-card/80 backdrop-blur p-8 text-center shadow-sm"
      >
        <h3 className="text-xl font-semibold">From Intelligence to Impact</h3>
        <p className="mt-2 text-muted-foreground">A feedback-driven loop that compounds results.</p>
      </motion.div>

      {/* spokes */}
      {nodes.map(({ angle, i }) => (
        <Spoke key={i} angle={angle} index={i} />
      ))}
    </div>
  );
}

function Spoke({ angle, index }: { angle: number; index: number }) {
  const Icon = STEPS[index].icon;
  const title = STEPS[index].title;
  const desc = STEPS[index].desc;

  // Convert polar to Cartesian for node placement on the outer ring
  const R = 380; // radius
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * R;
  const y = Math.sin(rad) * R;

  return (
    <div className="absolute left-1/2 top-1/2" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
      {/* node */}
      <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="relative group">
        <div className="w-[220px] rounded-xl border border-border/60 bg-card/90 backdrop-blur p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-destructive/70 text-[10px] font-semibold text-destructive">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <Icon className="text-destructive" size={18} strokeWidth={1.6} />
            <h4 className="text-sm font-semibold tracking-tight">{title}</h4>
          </div>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{desc}</p>
        </div>

        {/* connector line to center */}
        <div className="absolute left-1/2 -z-10" style={{ transform: "translateX(-50%)" }}>
          <motion.div
            initial={{ height: 0, opacity: 0.6 }}
            whileInView={{ height: 180, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-[2px] bg-gradient-to-b from-destructive/70 to-transparent origin-top"
            style={{ transform: `rotate(${angle + 90}deg)`, transformOrigin: "top" }}
          />
        </div>
      </motion.div>
    </div>
  );
}