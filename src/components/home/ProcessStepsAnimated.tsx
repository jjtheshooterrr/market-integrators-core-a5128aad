import { Brain, GitBranch, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import { useRef } from "react";
import { motion, useReducedMotion, Variants, useInView, useScroll } from "framer-motion";

// Completely rebuilt: no GSAP, pure Framer Motion + CSS. 
// Mobile-first single column with center rail & dots; md+ alternates left/right.
// Icons live inside the card header (no overlap with rail). Dots live between cards.

const STEPS = [
  { icon: Brain, number: "01", title: "Intelligence & Insight", description: "Deep-dive analysis into your data, market trends, and customer signals." },
  { icon: GitBranch, number: "02", title: "Strategic Architecture", description: "Build your marketing system like an engineer: structure, flow, and performance built in." },
  { icon: Rocket, number: "03", title: "Launch & Learn", description: "Deploy, test, and iterate — every week, every channel, every audience." },
  { icon: TrendingUp, number: "04", title: "Optimize & Scale", description: "Continuous performance tuning powered by machine learning and predictive modeling." },
  { icon: BarChart3, number: "05", title: "Transparency & Reporting", description: "Access real metrics in real time through your analytics dashboard." },
] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProcessStepsAnimated() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 20%", "end 80%"] });

  return (
    <section ref={sectionRef} className="relative w-full overflow-x-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-14"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight">Our Methodology: From Intelligence to Impact</h2>
          <p className="mt-3 text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine market analysis, creative precision, and adaptive optimization to engineer scalable growth systems.
          </p>
        </motion.div>

        {/* Rail */}
        <div className="relative max-w-6xl mx-auto">
          {/* Static rail */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border/40" />
          {/* Progress rail (Framer scroll linked) */}
          <motion.div
            style={{ scaleY: prefersReducedMotion ? 1 : (scrollYProgress as unknown as number) }}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-destructive via-destructive/80 to-transparent shadow-[0_0_12px_rgba(244,63,94,0.35)]"
          />

          <ol className="relative">
            {STEPS.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: typeof STEPS[number]; index: number }) {
  const ref = useRef<HTMLLIElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = step.icon;
  const isLeft = index % 2 === 0;

  return (
    <li ref={ref} className="relative">
      {/* Center dot placed in the gap ABOVE the card to avoid overlap */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0.6 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.25 }}
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-3 md:top-4 z-[5]"
      >
        <div className="w-3.5 h-3.5 rounded-full bg-destructive shadow-[0_0_0_6px_rgba(244,63,94,0.18)]" />
      </motion.div>

      {/* Card wrapper adds vertical gap so the dot sits BETWEEN cards */}
      <div className="pt-6 md:pt-8 pb-8 md:pb-10">
        <motion.article
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={cardVariants}
          className={`group relative mx-auto max-w-[360px] md:max-w-xl ${
            isLeft ? "md:mr-[52%] md:pr-10" : "md:ml-[52%] md:pl-10"
          }`}
        >
          <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur p-5 md:p-7 shadow-sm hover:shadow-md transition-shadow">
            {/* Title row with compact meta */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-destructive/70 text-[10px] font-semibold text-destructive">
                {step.number}
              </span>
              <Icon className="text-destructive" size={18} strokeWidth={1.6} />
              <h3 className="text-base md:text-xl font-semibold tracking-tight text-center md:text-left">
                {step.title}
              </h3>
            </div>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed text-center md:text-left">
              {step.description}
            </p>
          </div>
        </motion.article>
      </div>
    </li>
  );
}