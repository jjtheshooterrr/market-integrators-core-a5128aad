import { Brain, GitBranch, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import { useMemo, useRef } from "react";
import { motion, Variants, useInView, useScroll, useSpring } from "framer-motion";

/**
 * MethodologyFlow — fully redesigned, fluid, and responsive.
 *
 * Mobile (sm):
 *  - Horizontal swipeable step cards with scroll-snap
 *  - Animated top progress bar reflecting scroll position
 *
 * Desktop (md+):
 *  - Sticky left progress rail with numbered steps
 *  - Right column shows elegant cards with subtle entrance animations
 *
 * Implementation details:
 *  - Pure Framer Motion (no GSAP)
 *  - Accessible markup (nav/aria-current)
 *  - Clean Tailwind utility classes; shadcn-friendly tokens
 */

const STEPS = [
  { icon: Brain, title: "Intelligence & Insight", desc: "Deep-dive analysis into your data, market trends, and customer signals." },
  { icon: GitBranch, title: "Strategic Architecture", desc: "Build your marketing system like an engineer: structure, flow, and performance built in." },
  { icon: Rocket, title: "Launch & Learn", desc: "Deploy, test, and iterate — every week, every channel, every audience." },
  { icon: TrendingUp, title: "Optimize & Scale", desc: "Continuous performance tuning powered by machine learning and predictive modeling." },
  { icon: BarChart3, title: "Transparency & Reporting", desc: "Access real metrics in real time through your analytics dashboard." },
] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45 } },
};

export default function MethodologyFlow() {
  // Root refs for progress bar springs
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({ container: mobileTrackRef });
  const mobileProgress = useSpring(scrollXProgress, { stiffness: 120, damping: 20, mass: 0.4 });

  return (
    <section className="w-full">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight">Our Methodology</h2>
          <p className="mt-2 md:mt-3 text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">From intelligence to impact—designed as a loop, not a line.</p>
        </motion.div>
      </div>

      {/* MOBILE: horizontal snap flow */}
      <div className="md:hidden">
        {/* Progress bar */}
        <div className="relative h-1.5 bg-border/40 mx-4 rounded-full overflow-hidden">
          <motion.div style={{ scaleX: mobileProgress }} className="origin-left h-full bg-destructive" />
        </div>

        <div
          ref={mobileTrackRef}
          className="mt-5 flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-none"
          aria-label="Methodology steps"
          role="list"
        >
          {STEPS.map((s, i) => (
            <MobileCard key={s.title} index={i} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>

      {/* DESKTOP: sticky rail + content */}
      <div className="hidden md:grid max-w-6xl mx-auto px-6 py-16 md:grid-cols-[300px,1fr] gap-10">
        <ProgressRail steps={STEPS} />
        <div className="space-y-10">
          {STEPS.map((s, i) => (
            <RevealCard key={s.title} index={i} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= MOBILE COMPONENTS ========================= */
function MobileCard({ index, icon: Icon, title, desc }: { index: number; icon: any; title: string; desc: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35 }}
      role="listitem"
      className="snap-center shrink-0 w-[86%] xxs:w-[90%] max-w-[360px] rounded-2xl border border-border/60 bg-card/80 backdrop-blur p-5 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-destructive/70 text-[11px] font-semibold text-destructive">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <Icon className="text-destructive" size={18} strokeWidth={1.6} />
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ========================= DESKTOP COMPONENTS ========================= */
function ProgressRail({ steps }: { steps: ReadonlyArray<{ title: string }> }) {
  return (
    <nav aria-label="Step navigation" className="sticky top-24 self-start">
      <ol className="relative pl-8">
        {/* rail */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border/60" />
        {steps.map((s, i) => (
          <li key={s.title} className="relative py-4">
            <RailDot index={i} />
            <span className="ml-4 text-sm text-muted-foreground">{(i + 1).toString().padStart(2, "0")}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function RailDot({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-20%" });
  return (
    <div ref={ref} className="absolute -left-[5px] top-1/2 -translate-y-1/2">
      <motion.div
        aria-hidden
        initial={{ scale: 0.6, opacity: 0.6 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.25 }}
        className="w-3.5 h-3.5 rounded-full bg-destructive shadow-[0_0_0_6px_rgba(244,63,94,0.18)]"
      />
    </div>
  );
}

function RevealCard({ index, icon: Icon, title, desc }: { index: number; icon: any; title: string; desc: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const number = useMemo(() => (index + 1).toString().padStart(2, "0"), [index]);

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur p-7 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-destructive/70 text-[11px] font-semibold text-destructive">
          {number}
        </span>
        <Icon className="text-destructive" size={18} strokeWidth={1.6} />
        <h3 className="text-lg md:text-xl font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
    </motion.article>
  );
}