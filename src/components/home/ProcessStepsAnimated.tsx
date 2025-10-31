import { Brain, GitBranch, Rocket, TrendingUp, BarChart3, Sparkles } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

/**
 * MethodologyFlowPro — desktop "flow" edition
 * - Desktop: single seamless horizontal rail with animated progress and connected cards
 * - Mobile: keeps a clean vertical list with sticky progress
 * - Polished visuals: glass cards, gradient borders, soft glow, micro-interactions
 */

const STEPS = [
  { icon: Brain, title: "Intelligence & Insight", desc: "Deep-dive analysis into your data, market trends, and customer signals." },
  { icon: GitBranch, title: "Strategic Architecture", desc: "Build your marketing system like an engineer: structure, flow, and performance built in." },
  { icon: Rocket, title: "Launch & Learn", desc: "Deploy, test, and iterate — every week, every channel, every audience." },
  { icon: TrendingUp, title: "Optimize & Scale", desc: "Continuous performance tuning powered by machine learning and predictive modeling." },
  { icon: BarChart3, title: "Transparency & Reporting", desc: "Access real metrics in real time through your analytics dashboard." },
] as const;

export default function MethodologyFlowPro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 10%", "end 90%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.35 });

  return (
    <section ref={sectionRef} className="relative w-full overflow-x-clip">
      <DecorativeBackground />

      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight">Our Methodology</h2>
          <p className="mt-2 md:mt-3 text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            A practical, repeatable flow — from intelligence to impact.
          </p>
        </motion.div>
      </div>

      {/* MOBILE: sticky progress + vertical cards */}
      <div className="md:hidden">
        <div className="sticky top-14 z-10 mx-4">
          <div className="h-1.5 w-full rounded-full bg-border/40 overflow-hidden">
            <motion.div style={{ scaleX: progress }} className="origin-left h-full bg-gradient-to-r from-destructive via-pink-500 to-rose-500" />
          </div>
        </div>
        <ul className="mt-4 space-y-4 px-4">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <Card index={i} icon={s.icon} title={s.title} desc={s.desc} mobile />
            </li>
          ))}
        </ul>
      </div>

      {/* DESKTOP: single-row connected flow (no stagger) */}
      <div className="hidden md:block">
        <FlowRail steps={STEPS} progress={progress} />
      </div>
    </section>
  );
}

function FlowRail({ steps, progress }: { steps: typeof STEPS; progress: any }) {
  const railRef = useRef<HTMLDivElement | null>(null);
  // subtle parallax on the rail glow
  const glowX = useTransform(progress, [0, 1], ["-10%", "100%"]);

  const cols = useMemo(() => `grid-cols-${steps.length}`, [steps.length]);

  return (
    <div className="relative max-w-7xl mx-auto px-6 pb-24">
      {/* rail */}
      <div className="relative">
        {/* glow that travels along the rail */}
        <motion.div
          aria-hidden
          style={{ left: glowX }}
          className="pointer-events-none absolute top-[46px] md:top-[52px] h-[6px] w-[30%] -translate-x-1/2 rounded-full blur-md bg-gradient-to-r from-destructive/40 via-pink-500/30 to-rose-500/30"
        />

        {/* rail line */}
        <div className="absolute left-0 right-0 top-[52px] h-[2px] bg-gradient-to-r from-border via-border/70 to-border rounded-full" />

        {/* progress mask */}
        <motion.div
          className="absolute left-0 top-[52px] h-[2px] bg-gradient-to-r from-destructive via-pink-500 to-rose-500 rounded-full"
          style={{ width: useTransform(progress, [0, 1], ["0%", "100%"]) }}
        />

        {/* connected cards */}
        <div ref={railRef} className={`relative grid ${cols} gap-6`}>
          {steps.map((s, i) => (
            <div key={s.title} className="relative pt-16">
              {/* connector dot */}
              <div className="absolute left-1/2 top-10 -translate-x-1/2 z-10">
                <motion.span
                  className="grid place-items-center w-6 h-6 rounded-full border border-destructive/50 bg-background"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="block w-2 h-2 rounded-full bg-destructive" />
                </motion.span>
              </div>

              <Card index={i} icon={s.icon} title={s.title} desc={s.desc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ index, icon: Icon, title, desc, mobile = false }:{ index: number; icon: any; title: string; desc: string; mobile?: boolean; }) {
  const number = (index + 1).toString().padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: mobile ? "-25%" : "-10%" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45 }}
      className="group relative rounded-2xl border bg-card/80 backdrop-blur p-5 md:p-6 shadow-sm hover:shadow-lg transition-all"
      style={{
        borderColor: "transparent",
        backgroundImage:
          "linear-gradient(var(--cardBg, rgba(255,255,255,0.75)), var(--cardBg, rgba(255,255,255,0.75))) , linear-gradient(120deg, rgba(244,63,94,0.45), rgba(244,63,94,0.15) 40%, rgba(255,255,255,0) 60%)",
        backgroundClip: "padding-box, border-box",
      }}
    >
      {/* shine */}
      <span className="pointer-events-none absolute -top-16 left-0 right-0 h-24 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-destructive/70 text-[11px] font-semibold text-destructive bg-white/60 backdrop-blur-sm">
          {number}
        </span>
        <motion.span
          whileHover={{ rotate: 10, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250, damping: 12 }}
          className="grid place-items-center w-8 h-8 rounded-md bg-destructive/10"
        >
          <Icon className="text-destructive" size={18} strokeWidth={1.6} />
        </motion.span>
        <h3 className={`${mobile ? "text-base" : "text-lg md:text-xl"} font-semibold tracking-tight flex items-center gap-2`}>
          {title}
          <Sparkles className="hidden md:inline-block w-4 h-4 text-destructive/70" />
        </h3>
      </div>
      <p className={`text-muted-foreground leading-relaxed ${mobile ? "mt-3 text-sm" : "mt-3"}`}>{desc}</p>
    </motion.article>
  );
}

function DecorativeBackground() {
  // Soft animated gradient blobs behind content
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(244,63,94,0.18), transparent)" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(244,63,94,0.12), transparent)" }}
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}