import { Brain, GitBranch, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion, cubicBezier, Variants } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

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
];

const cardVariants: Variants = {
  hidden: (i: number) => ({ opacity: 0, y: 24, x: i % 2 ? 28 : -28 }),
  show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};

export default function ProcessStepsRefined() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressLineRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!sectionRef.current || !progressLineRef.current) return;

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
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Our Methodology: From Intelligence to Impact
          </h2>
          <p className="mt-2 text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine market analysis, creative precision, and adaptive optimization to engineer scalable growth
            systems.
          </p>
        </motion.div>

        {/* Center Line Visible on All Screens */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-border/30" />
          <div
            ref={progressLineRef}
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-gradient-to-b from-destructive via-destructive/80 to-transparent origin-top rounded-full shadow-[0_0_12px_rgba(244,63,94,0.4)]"
          />

          <ol className="relative space-y-8 md:space-y-20">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Animated Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3 z-10 pointer-events-none">
                    <div className="w-4 h-4 rounded-full bg-destructive shadow-[0_0_0_5px_rgba(244,63,94,0.2)]" />
                  </div>

                  {/* Card */}
                  <div className="relative bg-card/80 backdrop-blur border border-border/60 rounded-lg p-5 md:p-8 max-w-[360px] md:max-w-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 ml-6 md:ml-0 z-20">
                      <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                        <Icon className="text-destructive" size={18} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-base md:text-xl font-semibold tracking-tight flex items-center justify-center gap-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-destructive/60 text-[10px] text-destructive">
                          {step.number}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
