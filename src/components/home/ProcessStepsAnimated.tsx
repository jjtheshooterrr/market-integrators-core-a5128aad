import { Brain, GitBranch, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import { motion, Variants, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * ProcessStepsAnimated — BRAND NEW DESIGN (no rails, no overlap, buttery smooth)
 *
 * Mobile:
 *  - Vertical cards with a sticky top progress bar linked to scroll
 *  - Snap-like spacing, compact typography, zero overflow issues
 *
 * Desktop:
 *  - Two-column staggered cards (masonry-like) with gentle entrance
 *  - Left column shows steps 1,3,5; right column shows 2,4
 *  - Each card has a number chip + icon row; subtle glow on hover
 *
 * Pure Framer Motion (no GSAP). Type-safe variants. Minimal, modern Tailwind.
 */

const STEPS = [
  { icon: Brain,  title: "Intelligence & Insight", desc: "Deep-dive analysis into your data, market trends, and customer signals." },
  { icon: GitBranch, title: "Strategic Architecture", desc: "Build your marketing system like an engineer: structure, flow, and performance built in." },
  { icon: Rocket, title: "Launch & Learn", desc: "Deploy, test, and iterate — every week, every channel, every audience." },
  { icon: TrendingUp, title: "Optimize & Scale", desc: "Continuous performance tuning powered by machine learning and predictive modeling." },
  { icon: BarChart3, title: "Transparency & Reporting", desc: "Access real metrics in real time through your analytics dashboard." },
] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.45 } },
};

export default function ProcessStepsAnimated() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 10%", "end 90%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.35 });

  return (
    <section ref={sectionRef} className="w-full overflow-x-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16">
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
            <motion.div style={{ scaleX: progress }} className="origin-left h-full bg-destructive" />
          </div>
        </div>

        <ul className="mt-4 space-y-4 px-4">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <RevealCard mobile index={i} icon={s.icon} title={s.title} desc={s.desc} />
            </li>
          ))}
        </ul>
      </div>

      {/* DESKTOP: two-column staggered layout */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-12 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.title} className={`${i % 2 === 0 ? "col-span-6" : "col-span-6"} ${i % 2 === 0 ? "pt-0" : "pt-10"}`}>
                <RevealCard index={i} icon={s.icon} title={s.title} desc={s.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealCard({ index, icon: Icon, title, desc, mobile = false }:{ index: number; icon: any; title: string; desc: string; mobile?: boolean; }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: mobile ? "-25%" : "-15%" });
  const number = (index + 1).toString().padStart(2, "0");

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={`rounded-2xl border border-border/60 bg-card/80 backdrop-blur ${mobile ? "p-5" : "p-7"} shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className={`flex items-center ${mobile ? "justify-start" : "justify-start"} gap-3`}>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-destructive/70 text-[11px] font-semibold text-destructive">
          {number}
        </span>
        <Icon className="text-destructive" size={18} strokeWidth={1.6} />
        <h3 className={`${mobile ? "text-base" : "text-lg md:text-xl"} font-semibold tracking-tight`}>{title}</h3>
      </div>
      <p className={`text-muted-foreground leading-relaxed ${mobile ? "mt-3 text-sm" : "mt-3"}`}>{desc}</p>
    </motion.article>
  );
}