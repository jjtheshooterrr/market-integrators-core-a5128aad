import { Brain, GitBranch, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion, cubicBezier, Variants } from "framer-motion";

// Register GSAP plugin once
if (typeof window !== "undefined" && (gsap as any).plugins.ScrollTrigger !== ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Improved, accessible, and smoother version of the vertical timeline.
 * Key upgrades:
 * - Crisper layout & spacing, better contrast, subtle glass card effect
 * - Sticky headline, progress line with gradient glow & markers
 * - Reduced-motion support (no GSAP when user prefers reduced motion)
 * - Small-viewport first (stacked), elegant alternating layout on md+
 * - Keyboard focus ring & semantic markup
 */

const STEPS = [
  {
    icon: Brain,
    number: "01",
    title: "Intelligence & Insight",
    description: "Deep-dive analysis into your data, market trends, and customer signals.",
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Strategic Architecture",
    description: "Build your marketing system like an engineer: structure, flow, and performance built in.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Learn",
    description: "Deploy, test, and iterate — every week, every channel, every audience.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimize & Scale",
    description: "Continuous performance tuning powered by machine learning and predictive modeling.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Transparency & Reporting",
    description: "Access real metrics in real time through your analytics dashboard.",
  },
] as const;

const cardVariants: Variants = {
  hidden: (i: number) => ({ opacity: 0, y: 24, x: i % 2 ? 28 : -28 }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export default function ProcessStepsRefined() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressWrapRef = useRef<HTMLDivElement | null>(null);
  const progressLineRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return; // Respect user preference
    if (!sectionRef.current || !progressWrapRef.current || !progressLineRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top center+=40",
          end: "bottom center",
          scrub: 1,
        },
        defaults: { ease: "none" },
      });

      tl.fromTo(progressLineRef.current, { scaleY: 0 }, { scaleY: 1 });

      // pulse markers slightly as they cross the viewport center
      const markers = progressWrapRef.current!.querySelectorAll('[data-node="dot"]');
      markers.forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            scrollTrigger: {
              trigger: el as Element,
              start: "top center+=40",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="methodology"
      aria-label="Our methodology timeline"
      className="relative w-full overflow-x-clip"
    >
      {/* Sticky header for context while scrolling */}
      <div className="md:sticky md:top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight text-foreground text-center">
            Our Methodology: From Intelligence to Impact
          </h2>
          <p className="mt-2 text-sm md:text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            We combine market analysis, creative precision, and adaptive optimization to engineer scalable growth
            systems.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Rail & progress */}
        <div ref={progressWrapRef} className="pointer-events-none hidden md:block">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-border via-border/70 to-border/20" />
          <div
            ref={progressLineRef}
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] origin-top scale-y-0 rounded-full bg-gradient-to-b from-destructive via-destructive/80 to-transparent shadow-[0_0_18px_2px_rgba(244,63,94,0.35)]"
          />
        </div>

        <ol className="relative space-y-16 md:space-y-24">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <li key={step.number} className="relative">
                {/* connector dot for md+ */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 z-10" aria-hidden>
                  <div
                    data-node="dot"
                    className="w-3 h-3 rounded-full bg-destructive shadow-[0_0_0_6px_rgba(244,63,94,0.15)]"
                  />
                </div>

                <motion.article
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4, margin: "-80px" }}
                  variants={cardVariants}
                  className={`group relative max-w-xl ${
                    isLeft ? "md:mr-[52%] md:pr-10" : "md:ml-[52%] md:pl-10"
                  } mx-auto md:mx-0`}
                >
                  {/* number chip */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto md:top-auto flex md:block">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-destructive/80 bg-destructive/10 text-destructive text-xs font-bold shadow-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* card */}
                  <div
                    tabIndex={0}
                    className="mt-6 md:mt-3 outline-none focus-visible:ring-2 focus-visible:ring-destructive/40 rounded-2xl p-6 md:p-8 bg-card/60 backdrop-blur border border-border/60 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`flex items-start gap-4 ${isLeft ? "md:flex-row-reverse md:text-right" : "md:flex-row"} flex-col text-center md:text-left`}
                    >
                      <div className="relative w-14 h-14 shrink-0 self-center md:self-start">
                        <div className="absolute inset-0 rounded-xl bg-destructive/10" />
                        <div className="relative w-full h-full grid place-items-center">
                          <Icon className="text-destructive" size={26} strokeWidth={1.6} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
