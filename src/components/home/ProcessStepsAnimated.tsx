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
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.fromTo(
      progressLineRef.current,
      { scaleX: 0 },
      { scaleX: 1, ease: "none" }
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

        {/* Progress Line */}
        <div className="relative mb-16 hidden lg:block">
          <div className="absolute top-0 left-0 w-full h-1 bg-border" />
          <div
            ref={progressLineRef}
            className="absolute top-0 left-0 h-1 bg-primary origin-left"
            style={{ width: '100%' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                    className="relative inline-flex items-center justify-center w-20 h-20 mb-6"
                  >
                    <div className="absolute inset-0 bg-primary/10 rounded-full" />
                    <Icon className="relative text-primary" size={32} />
                  </motion.div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 text-6xl font-bold text-primary/5">
                    {step.number}
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessStepsAnimated;
