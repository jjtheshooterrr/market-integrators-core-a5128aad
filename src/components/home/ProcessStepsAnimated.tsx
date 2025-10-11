import { Brain, GitBranch, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ProcessStepsAnimated = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const steps = [
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

  useEffect(() => {
    if (!progressLineRef.current || !sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.fromTo(
      progressLineRef.current,
      { scaleY: 0 },
      { scaleY: 1, ease: "none" }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our Methodology: From Intelligence to Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine market analysis, creative precision, and adaptive optimization to engineer scalable growth systems.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border/30 hidden md:block" />
          <div
            ref={progressLineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-destructive origin-top hidden md:block"
          />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center`}>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-destructive/30 transition-all duration-300 hover:shadow-lg hover:shadow-destructive/5"
                    >
                      {/* Number badge - shown on all screen sizes */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-10 h-10 bg-destructive/20 rounded-full border-2 border-destructive flex items-center justify-center">
                          <span className="text-xs font-bold text-destructive">{step.number}</span>
                        </div>
                      </div>

                      <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left'} flex-col text-center mt-2`}>
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <div className="relative w-16 h-16">
                            <div className="absolute inset-0 bg-destructive/10 rounded-xl" />
                            <div className="relative w-full h-full flex items-center justify-center">
                              <Icon className="text-destructive" size={28} strokeWidth={1.5} />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node - only for visual timeline on desktop */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                    className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block"
                  >
                    <div className="relative w-3 h-3">
                      <div className="absolute inset-0 bg-destructive rounded-full" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessStepsAnimated;
