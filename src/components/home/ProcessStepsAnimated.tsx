import { Target, Lightbulb, Rocket, LineChart } from "lucide-react";
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
      icon: Target,
      number: "01",
      title: "Strategy & Discovery",
      description: "We analyze your business, competitors, and market to create a data-driven marketing roadmap.",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Campaign Development",
      description: "Our experts design and build campaigns optimized for maximum ROI and conversions.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch & Optimize",
      description: "We launch your campaigns and continuously test and optimize for better performance.",
    },
    {
      icon: LineChart,
      number: "04",
      title: "Track & Report",
      description: "Receive detailed analytics and insights showing exactly how your investment is performing.",
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
          <h2 className="mb-4">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven process designed to deliver measurable results from day one
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
