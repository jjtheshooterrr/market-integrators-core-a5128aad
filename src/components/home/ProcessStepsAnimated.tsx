import { Brain, GitBranch, Rocket, TrendingUp, BarChart3, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useRef, useEffect } from "react";

/**
 * MethodologyCompactTabs — site-friendly layout
 * - Super compact on desktop: a single row of step pills + one detail panel
 * - Mobile: swipe/scrollable pills; panel stacks
 * - Keeps the same copy; minimizes vertical space
 */

const STEPS = [
  { icon: Brain, title: "Intelligence & Insight", desc: "Deep-dive analysis into your data, market trends, and customer signals." },
  { icon: GitBranch, title: "Strategic Architecture", desc: "Build your marketing system like an engineer: structure, flow, and performance built in." },
  { icon: Rocket, title: "Launch & Learn", desc: "Deploy, test, and iterate — every week, every channel, every audience." },
  { icon: TrendingUp, title: "Optimize & Scale", desc: "Continuous performance tuning powered by machine learning and predictive modeling." },
  { icon: BarChart3, title: "Transparency & Reporting", desc: "Access real metrics in real time through your analytics dashboard." },
] as const;

export default function MethodologyCompactTabs() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  // keyboard navigation for accessibility
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((i) => Math.min(STEPS.length - 1, i + 1));
      if (e.key === "ArrowLeft") setActive((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // center active pill in view when changed
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLButtonElement>(`[data-idx='${active}']`);
    el?.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  }, [active]);

  return (
    <section className="relative w-full">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Our Methodology</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">A practical, repeatable flow — from intelligence to impact.</p>
        </div>
      </div>

      {/* Compact tabs row */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative">
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <NavButton onClick={() => setActive((i) => Math.max(0, i - 1))} dir="left" />
          </div>
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <NavButton onClick={() => setActive((i) => Math.min(STEPS.length - 1, i + 1))} dir="right" />
          </div>

          <div
            ref={listRef}
            className="no-scrollbar relative flex gap-2 md:gap-3 overflow-x-auto px-1 py-2 md:py-3 rounded-xl border bg-card/70 backdrop-blur"
          >
            {STEPS.map((s, i) => (
              <StepPill key={s.title} idx={i} active={active} setActive={setActive} icon={s.icon} title={s.title} />
            ))}
          </div>
        </div>
      </div>

      {/* Detail panel */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-4 md:mt-6 pb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border bg-card/80 backdrop-blur p-4 md:p-6 shadow-sm"
            style={{
              borderColor: "transparent",
              backgroundImage:
                "linear-gradient(var(--cardBg, rgba(255,255,255,0.75)), var(--cardBg, rgba(255,255,255,0.75))) , linear-gradient(120deg, rgba(244,63,94,0.35), rgba(244,63,94,0.12) 40%, rgba(255,255,255,0) 60%)",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <PanelContent index={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function StepPill({ idx, active, setActive, icon: Icon, title }: { idx: number; active: number; setActive: (i: number) => void; icon: any; title: string; }) {
  const number = (idx + 1).toString().padStart(2, "0");
  const isActive = active === idx;

  return (
    <button
      type="button"
      data-idx={idx}
      aria-selected={isActive}
      onClick={() => setActive(idx)}
      className={`group shrink-0 inline-flex items-center gap-2 md:gap-2.5 rounded-xl border px-3 md:px-4 py-2 text-xs md:text-sm transition-all ${
        isActive
          ? "bg-destructive/10 border-destructive/40 text-foreground"
          : "bg-background/60 hover:bg-background border-border"
      }`}
    >
      <span className="inline-flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full border border-destructive/60 text-[10px] md:text-[11px] font-semibold text-destructive bg-white/70">
        {number}
      </span>
      <span className="grid place-items-center w-6 h-6 md:w-7 md:h-7 rounded-md bg-destructive/10">
        <Icon className="text-destructive" size={16} strokeWidth={1.6} />
      </span>
      <span className="font-medium whitespace-nowrap">{title}</span>
    </button>
  );
}

function PanelContent({ index }: { index: number }) {
  const StepIcon = STEPS[index].icon;
  const title = STEPS[index].title;
  const desc = STEPS[index].desc;
  const number = (index + 1).toString().padStart(2, "0");

  return (
    <div className="flex items-start gap-3 md:gap-4">
      <span className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border border-destructive/70 text-[11px] font-semibold text-destructive bg-white/60">
        {number}
      </span>
      <div className="grid place-items-center w-8 h-8 md:w-9 md:h-9 rounded-md bg-destructive/10">
        <StepIcon className="text-destructive" size={18} strokeWidth={1.6} />
      </div>
      <div className="min-w-0">
        <h3 className="text-base md:text-lg font-semibold tracking-tight flex items-center gap-2">
          {title}
          <Sparkles className="hidden md:inline-block w-4 h-4 text-destructive/70" />
        </h3>
        <p className="mt-1.5 text-sm md:text-[15px] text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function NavButton({ onClick, dir }: { onClick: () => void; dir: "left" | "right" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Previous step" : "Next step"}
      className="inline-flex items-center justify-center rounded-full border bg-card/70 backdrop-blur p-2 shadow-sm hover:shadow transition-all"
    >
      {dir === "left" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </button>
  );
}