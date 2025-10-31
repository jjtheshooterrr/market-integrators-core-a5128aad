import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SparkleEffect from "@/components/effects/SparkleEffect";
import MagneticButton from "@/components/effects/MagneticButton";
const CTASection = () => {
  return <section className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div animate={{
      background: ["radial-gradient(circle at 20% 50%, rgba(210, 10, 10, 0.1) 0%, transparent 50%)", "radial-gradient(circle at 80% 50%, rgba(210, 10, 10, 0.1) 0%, transparent 50%)", "radial-gradient(circle at 20% 50%, rgba(210, 10, 10, 0.1) 0%, transparent 50%)"]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }} className="absolute inset-0 z-0" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <SparkleEffect>
              <h2 className="text-primary-foreground mb-6">
                Ready to <span className="text-primary neon-glow">Accelerate</span> Your Business Growth?
              </h2>
            </SparkleEffect>
          </motion.div>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Get a free, customized digital marketing proposal tailored to your business goals. 
            No commitments, no pressure—just actionable strategies to help you succeed.
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button asChild size="lg" variant="secondary" className="btn-text shadow-red">
                  <Link to="/contact-us">
                    Request Free Proposal <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </motion.div>
            </MagneticButton>
            
            <MagneticButton>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button asChild size="lg" variant="outline" className="btn-text border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  
                </Button>
              </motion.div>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <motion.div animate={{
      y: [0, -20, 0]
    }} transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full opacity-50" />
      <motion.div animate={{
      y: [0, 20, 0]
    }} transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute bottom-10 right-10 w-3 h-3 bg-primary rounded-full opacity-50" />
      <motion.div animate={{
      y: [0, -15, 0]
    }} transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute top-1/2 right-20 w-2 h-2 bg-primary rounded-full opacity-50" />
    </section>;
};
export default CTASection;