import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import ThreeBackground from "@/components/effects/ThreeBackground";
import MagneticButton from "@/components/effects/MagneticButton";
import GlitchText from "@/components/effects/GlitchText";

const HeroEnhanced = () => {
  const [init, setInit] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Digital Marketing Analytics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </motion.div>

      {/* Three.js Animated Background */}
      <ThreeBackground />

      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="absolute inset-0 z-[1]"
          options={{
            fpsLimit: 60,
            particles: {
              color: { value: "#D20A0A" },
              links: {
                color: "#D20A0A",
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" },
              },
              number: {
                density: { enable: true },
                value: 50,
              },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Content */}
      <motion.div style={{ y }} className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp className="text-primary" size={18} />
            </motion.div>
            <span className="text-sm font-medium text-primary-foreground">Results-Driven Marketing Agency</span>
          </motion.div>
          
          <h1 className="text-primary-foreground mb-6">
            <TypeAnimation
              sequence={[
                "Digital Marketing That",
                500,
                "Digital Marketing That Moves the Needle",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
              className="inline-block"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="block text-primary mt-2"
            >
              <GlitchText>Moves the Needle</GlitchText>
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl"
          >
            Drive traffic, generate qualified leads, and increase revenue with data-driven PPC, SEO, web design, and video marketing strategies tailored to your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="btn-text shadow-red">
                  <Link to="/contact-us">
                    Request Free Proposal <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </motion.div>
            </MagneticButton>
            
            <MagneticButton>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="btn-text border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <Link to="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </motion.div>
            </MagneticButton>
          </motion.div>

          {/* Trust Indicators with CountUp and Stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl"
          >
            {[
              { end: 10, suffix: "+", label: "Years Experience" },
              { end: 500, suffix: "+", label: "Clients Served" },
              { end: 50, prefix: "$", suffix: "M+", label: "Revenue Generated" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.prefix}
                  <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 3, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroEnhanced;
