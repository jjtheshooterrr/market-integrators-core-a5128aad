// src/components/home/CinematicHero.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Target, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState, useEffect, lazy, Suspense } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const LogoMorph = lazy(() => import("@/components/effects/LogoMorph"));
const CinematicHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Safe prefers-reduced-motion (avoids SSR/window issues)
  const [prefersReducedMotion, setPRM] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPRM(mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // Show LogoMorph animation on mount
  const [showLogoMorph, setShowLogoMorph] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowLogoMorph(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Animation variants
  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  const ctaVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };
  const proofVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.15,
        duration: 0.4,
      },
    }),
  };
  const headline = ["Digital", "Solutions", "That", "Move", "the", "Needle."];
  const proofPillars = [
    {
      icon: Brain,
      text: "Built for the AI Era",
    },
    {
      icon: Target,
      text: "Measured by Outcomes",
    },
    {
      icon: TrendingUp,
      text: "Full-Funnel Intelligence",
    },
  ];
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated Gradient Background with Vignette */}
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : {
                y,
                opacity,
              }
        }
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-brand-red-dark animate-gradient-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Inline Logo Morph (in the gap above the H1) */}
          {showLogoMorph && !prefersReducedMotion && (
            <Suspense fallback={<div className="h-32 mb-8" />}>
              <div className="mx-auto mb-8 w-full max-w-md h-32 md:h-40 lg:h-48">
                <LogoMorph
                  src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegratorslogotransparent.webp"
                  color="hsl(0, 90%, 53%)"
                  height={160}
                />
              </div>
            </Suspense>
          )}

          {/* Headline with Staggered Word Reveal */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={prefersReducedMotion ? {} : wordVariants}
                initial={prefersReducedMotion ? "visible" : "hidden"}
                animate="visible"
                className="inline-block mr-4 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Lottie Animation */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mx-auto mb-8 w-48 h-48 md:w-64 md:h-64"
          >
            <DotLottieReact
              src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/Sew%20Stitch%20Doodle.lottie"
              loop
              autoplay
            />
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={
              prefersReducedMotion
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Full-funnel, data-driven growth strategies that turn insights into action and campaigns into revenue. We
            engineer digital solutions that deliver measurable impact across every customer touchpoint.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={prefersReducedMotion ? {} : ctaVariants}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-brand-red-dark text-white font-body font-semibold px-8 py-6 text-base shadow-red transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--brand-red)/0.5)] hover:scale-105"
            >
              <Link to="/contact-us">Request Free Proposal</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group border-2 border-white/30 text-white hover:bg-white/5 hover:border-brand-red font-body font-semibold px-8 py-6 text-base transition-all duration-300"
            >
              <Link to="/case-studies" className="relative">
                <span className="relative z-10">Explore Our Work</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
              </Link>
            </Button>
          </motion.div>

          {/* Glassmorphic Proof Bar */}
          <motion.div
            initial={
              prefersReducedMotion
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.5,
            }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-6 inline-flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {proofPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={prefersReducedMotion ? {} : proofVariants}
                  initial={prefersReducedMotion ? "visible" : "hidden"}
                  animate="visible"
                  className="group flex items-center gap-3 transition-colors duration-300 hover:text-brand-red cursor-default"
                >
                  <Icon
                    size={20}
                    className="text-white/60 group-hover:text-brand-red transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                  <span className="font-body text-sm md:text-base text-white/90 font-medium whitespace-nowrap">
                    {pillar.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={
          prefersReducedMotion
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        animate={
          prefersReducedMotion
            ? {
                opacity: 1,
              }
            : {
                opacity: 1,
                y: [0, 10, 0],
              }
        }
        transition={
          prefersReducedMotion
            ? {
                duration: 0,
              }
            : {
                duration: 1.5,
                delay: 1.5,
                repeat: Infinity,
              }
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, 12, 0],
                  }
            }
            transition={
              prefersReducedMotion
                ? {}
                : {
                    duration: 1.5,
                    repeat: Infinity,
                  }
            }
            className="w-1 h-3 bg-brand-red rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
export default CinematicHero;
