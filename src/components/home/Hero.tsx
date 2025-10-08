import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import CountUp from "react-countup";

const Hero = () => {
  const [init, setInit] = useState(false);

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

  const titleWords = "Digital Marketing That Moves the Needle".split(" ");

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Digital Marketing Analytics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="absolute inset-0 z-[1]"
          options={{
            fpsLimit: 60,
            particles: {
              color: {
                value: "#D20A0A",
              },
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
                outModes: {
                  default: "bounce",
                },
              },
              number: {
                density: {
                  enable: true,
                },
                value: 50,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <TrendingUp className="text-primary" size={18} />
            <span className="text-sm font-medium text-primary-foreground">Results-Driven Marketing Agency</span>
          </motion.div>
          
          <h1 className="text-primary-foreground mb-6">
            {titleWords.slice(0, 3).join(" ")}{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-primary"
            >
              {titleWords.slice(3).join(" ")}
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl"
          >
            Drive traffic, generate qualified leads, and increase revenue with data-driven PPC, SEO, web design, and video marketing strategies tailored to your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="btn-text shadow-red">
                <Link to="/contact-us">
                  Request Free Proposal <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="btn-text border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators with CountUp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl"
          >
            <div>
              <div className="text-3xl font-bold text-primary mb-1">
                <CountUp end={10} duration={2} suffix="+" />
              </div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">
                <CountUp end={500} duration={2.5} suffix="+" />
              </div>
              <div className="text-sm text-primary-foreground/80">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">
                $<CountUp end={50} duration={2.5} suffix="M+" />
              </div>
              <div className="text-sm text-primary-foreground/80">Revenue Generated</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
